import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const message = sanitize(payload.message);

  if (!name || !email || !message) {
    return Response.json(
      { message: "Please fill in name, email, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ message: "Please enter a valid email." }, { status: 400 });
  }

  if (message.length > 5000) {
    return Response.json(
      { message: "Please keep the message under 5000 characters." },
      { status: 400 },
    );
  }

  const smtpUser = process.env.EMAIL_USER;
  const smtpPass = process.env.EMAIL_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? smtpUser;
  const smtpHost = process.env.CONTACT_SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.CONTACT_SMTP_PORT ?? 465);

  if (!smtpUser || !smtpPass || !toEmail) {
    return Response.json(
      {
        message:
          "Contact email is not configured. Add EMAIL_USER and EMAIL_PASS in .env.local.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { message: "Could not send your message right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Message sent. I will get back to you soon." });
}