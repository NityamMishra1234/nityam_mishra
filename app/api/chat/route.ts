import { assistantKnowledge } from "@/lib/data";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const { messages = [] } = (await request.json()) as { messages: ChatMessage[] };
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return new Response(
      "AskNM is wired up, but GROQ_API_KEY is not configured on the server yet.",
      { status: 200 },
    );
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      stream: true,
      temperature: 0.45,
      messages: [
        {
          role: "system",
          content: `${assistantKnowledge}\nNever reveal confidential details about siro.care beyond the high-level description.`,
        },
        ...messages.slice(-10),
      ],
    }),
  });

  if (!response.ok || !response.body) {
    return new Response("The AI service is unavailable right now.", { status: 200 });
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body!.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        const text = decoder.decode(value);
        for (const line of text.split("\n")) {
          if (!line.startsWith("data: ")) {
            continue;
          }
          const payload = line.slice(6);
          if (payload === "[DONE]") {
            continue;
          }
          try {
            const json = JSON.parse(payload);
            const token = json.choices?.[0]?.delta?.content;
            if (token) {
              controller.enqueue(encoder.encode(token));
            }
          } catch {
            // Ignore partial stream frames.
          }
        }
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
