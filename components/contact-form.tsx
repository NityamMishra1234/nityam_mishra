"use client";

import { FormEvent, useState } from "react";

import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

type FormState =
  | "idle"
  | "sending"
  | "sent"
  | "error";

const fieldClasses =
  "mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

export function ContactForm() {
  const [state, setState] =
    useState<FormState>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(
      formData.get("name") ?? "",
    ).trim();

    const email = String(
      formData.get("email") ?? "",
    ).trim();

    const phone = String(
      formData.get("phone") ?? "",
    ).trim();

    const message = String(
      formData.get("message") ?? "",
    ).trim();

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        },
      );

      const result =
        (await response.json()) as {
          message?: string;
        };

      if (!response.ok) {
        throw new Error(
          result.message ??
          "Could not send your message.",
        );
      }

      form.reset();

      setState("sent");
    } catch (error) {
      setState("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong.",
      );
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel-strong)] shadow-xl shadow-black/5">
      <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--background)]/50 px-5 py-4 md:px-8">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        <span className="ml-3 font-mono text-xs font-medium text-[var(--muted)]">
          contact.form
        </span>
      </div>

      {state === "sent" ? (
        <div className="flex flex-col items-center justify-center space-y-4 px-5 py-16 text-center md:px-8 md:py-24">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <CheckCircle2 size={32} />
          </div>

          <h3 className="text-xl font-bold text-[var(--foreground)]">
            Message Sent
          </h3>

          <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            Thanks for reaching out. I have received your
            message and will get back to you soon.
          </p>

          <button
            type="button"
            onClick={() => {
              setState("idle");
              setErrorMessage("");
            }}
            className="mt-4 text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-5 md:p-8"
        >
          <fieldset
            disabled={state === "sending"}
            className="space-y-5"
          >
            <div>
              <label
                className="block text-sm font-semibold text-[var(--foreground)]"
                htmlFor="name"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                maxLength={100}
                className={fieldClasses}
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold text-[var(--foreground)]"
                htmlFor="email"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                maxLength={254}
                className={fieldClasses}
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold text-[var(--foreground)]"
                htmlFor="phone"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91 98765 43210"
                maxLength={20}
                className={fieldClasses}
                required
              />

              <p className="mt-2 text-xs text-[var(--muted)]">
                Include your country code so I can reach you if needed.
              </p>
            </div>

            <div>
              <label
                className="block text-sm font-semibold text-[var(--foreground)]"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me what you are working on and how I can help."
                maxLength={5000}
                className={`resize-none ${fieldClasses}`}
                required
              />

              <p className="mt-2 text-xs text-[var(--muted)]">
                Up to 5000 characters.
              </p>
            </div>

            {state === "error" && (
              <div className="flex items-start gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                <AlertCircle
                  size={16}
                  className="mt-0.5 shrink-0"
                />

                <p>{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={state === "sending"}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[var(--foreground)] bg-[var(--foreground)] text-sm font-bold text-[var(--background)] transition-all duration-200 hover:bg-[var(--foreground)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state === "sending" ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />

                  Sending
                </>
              ) : (
                <>
                  <Send
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                  Send Message
                </>
              )}
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
}