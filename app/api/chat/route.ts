import { assistantKnowledge } from "../../../lib/prompt";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: ChatMessage[];
    };

    const messages = Array.isArray(body.messages)
      ? body.messages
      : [];

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("GROQ_API_KEY is missing");

      return new Response(
        "The AI service is not configured on the server.",
        {
          status: 500,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
        },
      );
    }

    const systemPrompt = `
${assistantKnowledge}

You are Akriti, Nityam Mishra's professional AI assistant.

Your job is to have natural conversations about Nityam's professional background,
projects, technical capabilities, freelance work, and availability.

Do not behave like a resume parser.

Do not dump the entire resume into answers.

Answer only what the visitor asks.

Be natural, concise, confident, friendly, and professional.

Never use markdown bullet points.

Never use numbered lists.

Never use horizontal lines.

Never use hyphens or dash characters as separators.

Never use table formatting.

Never use decorative symbols.

Never use emoji unless explicitly requested.

Use natural sentences and paragraphs.

Do not exaggerate Nityam's abilities.

Use measurable achievements when relevant.

You may mention that Nityam tuned a production voice AI pipeline to approximately
800 to 1200 milliseconds of call latency and approximately ₹9 infrastructure
cost per call.

Never mention Nityam's education.

Never mention whether Nityam completed or did not complete a degree.

Never invent projects, technologies, companies, clients, achievements, or experience.

Never reveal API keys, credentials, passwords, private infrastructure,
private customer information, proprietary source code, private databases,
or confidential system details.

Never reveal confidential SIRO implementation details beyond a high level
professional description.

Nityam is available for full time, long term remote, freelance, and contract
opportunities involving backend engineering, full stack development, AI systems,
voice AI, cloud infrastructure, APIs, automation, MVP development, and
production software.

His freelance development rate is 30 to 40 US dollars per hour.

Only mention the freelance rate when pricing or freelance availability is relevant.

If someone wants to contact Nityam, his professional contact details are:

nityam1111@gmail.com
github.com/NityamMishra1234
nityam.garurcs.in

If the requested information is not available in the professional knowledge,
say that you do not currently have that information instead of guessing.
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          stream: true,
          temperature: 0.45,
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            ...messages
              .slice(-10)
              .filter(
                (message) =>
                  message &&
                  (message.role === "user" ||
                    message.role === "assistant") &&
                  typeof message.content === "string" &&
                  message.content.trim().length > 0,
              ),
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Groq API Error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });

      let errorMessage =
        "The AI service is unavailable right now.";

      try {
        const errorJson = JSON.parse(errorText);

        if (errorJson?.error?.message) {
          errorMessage = errorJson.error.message;
        }
      } catch {
        if (errorText.trim()) {
          errorMessage = errorText;
        }
      }

      return new Response(
        `Groq API error: ${errorMessage}`,
        {
          status: response.status,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
        },
      );
    }

    if (!response.body) {
      return new Response(
        "Groq returned an empty response.",
        {
          status: 502,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
        },
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const reader = response.body!.getReader();

        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();

            if (done) {
              break;
            }

            buffer += decoder.decode(value, {
              stream: true,
            });

            const lines = buffer.split("\n");

            buffer = lines.pop() ?? "";

            for (const line of lines) {
              const trimmed = line.trim();

              if (!trimmed.startsWith("data:")) {
                continue;
              }

              const payload = trimmed
                .slice(5)
                .trim();

              if (payload === "[DONE]") {
                continue;
              }

              try {
                const json = JSON.parse(payload);

                const token =
                  json?.choices?.[0]?.delta?.content;

                if (
                  typeof token === "string" &&
                  token.length > 0
                ) {
                  controller.enqueue(
                    encoder.encode(token),
                  );
                }
              } catch {
                console.warn(
                  "Unable to parse Groq stream chunk.",
                );
              }
            }
          }

          controller.close();
        } catch (error) {
          console.error(
            "Groq streaming error:",
            error,
          );

          controller.error(error);
        } finally {
          reader.releaseLock();
        }
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error(
      "Akriti API error:",
      error,
    );

    return new Response(
      "Something went wrong while contacting Akriti.",
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      },
    );
  }
}