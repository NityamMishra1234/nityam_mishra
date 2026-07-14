"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Could not send message.");
      }

      form.reset();
      setState("sent");
      setStatus(result.message ?? "Message sent. I will get back to you soon.");
    } catch (error) {
      setState("error");
      setStatus(error instanceof Error ? error.message : "Could not send message.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-2xl md:p-8"
    >
      <label className="block text-sm font-bold" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        autoComplete="name"
        className="mt-2 h-12 w-full rounded-[8px] border border-[var(--line)] bg-background px-4 outline-none"
        required
      />

      <label className="mt-5 block text-sm font-bold" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        className="mt-2 h-12 w-full rounded-[8px] border border-[var(--line)] bg-background px-4 outline-none"
        required
      />

      <label className="mt-5 block text-sm font-bold" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={7}
        className="mt-2 w-full resize-none rounded-[8px] border border-[var(--line)] bg-background p-4 outline-none"
        required
      />

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 h-12 w-full rounded-full bg-foreground text-sm font-bold text-background disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "sending" ? "Sending..." : "Send message"}
      </button>

      {status ? (
        <p
          className={`mt-4 text-sm font-medium ${
            state === "sent" ? "text-[var(--accent)]" : "text-red-500"
          }`}
        >
          {status}
        </p>
      ) : null}
    </form>
  );
}
