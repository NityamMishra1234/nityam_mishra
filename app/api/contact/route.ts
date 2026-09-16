import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function sanitize(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value,
  );
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");

  return (
    digits.length >= 7 &&
    digits.length <= 15
  );
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(
  request: Request,
) {
  try {
    const payload =
      (await request.json()) as ContactPayload;

    const name = sanitize(payload.name);
    const email = sanitize(payload.email);
    const phone = sanitize(payload.phone);
    const message = sanitize(payload.message);

    if (!name || !email || !phone || !message) {
      return Response.json(
        {
          message:
            "Please fill in your name, email, phone number, and message.",
        },
        {
          status: 400,
        },
      );
    }

    if (name.length > 100) {
      return Response.json(
        {
          message:
            "Please keep your name under 100 characters.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        {
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidPhone(phone)) {
      return Response.json(
        {
          message:
            "Please enter a valid phone number with your country code.",
        },
        {
          status: 400,
        },
      );
    }

    if (message.length > 5000) {
      return Response.json(
        {
          message:
            "Please keep the message under 5000 characters.",
        },
        {
          status: 400,
        },
      );
    }

    const smtpUser =
      process.env.EMAIL_USER;

    const smtpPass =
      process.env.EMAIL_PASS;

    const toEmail =
      process.env.CONTACT_TO_EMAIL ??
      "nityam1111@gmail.com";

    const smtpHost =
      process.env.CONTACT_SMTP_HOST ??
      "smtp.gmail.com";

    const smtpPort = Number(
      process.env.CONTACT_SMTP_PORT ?? 465,
    );

    if (
      !smtpUser ||
      !smtpPass
    ) {
      console.error(
        "Contact email SMTP credentials are missing.",
      );

      return Response.json(
        {
          message:
            "Contact email is not configured correctly on the server.",
        },
        {
          status: 500,
        },
      );
    }

    const transporter =
      nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,

        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Nityam Mishra Portfolio" <${smtpUser}>`,

      to: toEmail,

      replyTo: email,

      subject:
        `New portfolio message from ${name}`,

      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            max-width: 680px;
            margin: 0 auto;
            padding: 24px;
          "
        >
          <h2
            style="
              margin: 0 0 24px;
              font-size: 24px;
            "
          >
            New portfolio message
          </h2>

          <p style="margin: 8px 0;">
            <strong>Name</strong>
            <br />
            ${escapeHtml(name)}
          </p>

          <p style="margin: 8px 0;">
            <strong>Email</strong>
            <br />
            <a href="mailto:${escapeHtml(email)}">
              ${escapeHtml(email)}
            </a>
          </p>

          <p style="margin: 8px 0;">
            <strong>Phone</strong>
            <br />
            ${escapeHtml(phone)}
          </p>

          <p style="margin: 20px 0 8px;">
            <strong>Message</strong>
          </p>

          <p style="margin: 0;">
            ${escapeHtml(message).replaceAll(
        "\n",
        "<br />",
      )}
          </p>
        </div>
      `,
    });

    return Response.json({
      message:
        "Message sent. I will get back to you soon.",
    });
  } catch (error) {
    console.error(
      "Contact form email failed:",
      error,
    );

    return Response.json(
      {
        message:
          "Could not send your message right now. Please try again shortly.",
      },
      {
        status: 502,
      },
    );
  }
}