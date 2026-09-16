"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickReplies = [
  "What has he built?",
  "Is he open to freelance work?",
  "What's his tech stack?",
  "How do I contact him?",
];

export function AiChat({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I am Akriti. Ask me about Nityam projects, AI work, stack, or availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(value = input) {
    const text = value.trim();
    if (!text || loading) {
      return;
    }

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        throw new Error("No response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistant = "";
      setMessages([...nextMessages, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) {
          break;
        }
        assistant += decoder.decode(chunk);
        setMessages([...nextMessages, { role: "assistant", content: assistant }]);
      }
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "I could not reach the AI service right now. You can still contact Nityam directly from the contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage();
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          className="fixed bottom-24 right-5 z-50 flex h-[min(680px,calc(100vh-120px))] w-[min(420px,calc(100vw-32px))] flex-col overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
        >
          <div className="flex items-center justify-between border-b border-[var(--line)] p-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-foreground text-background">
                <Bot size={18} />
              </span>
              <div>
                <p className="font-bold">Akriti</p>
                <p className="text-xs text-[var(--muted)]">Nityam&apos;s AI Assistant</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              className="grid size-9 place-items-center rounded-full border border-[var(--line)]"
              onClick={onClose}
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-[8px] px-4 py-3 text-sm leading-6 ${message.role === "user"
                  ? "ml-auto bg-foreground text-background"
                  : "bg-background text-foreground"
                  }`}
              >
                {message.content || "Typing..."}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-[var(--line)] p-3">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                onClick={() => void sendMessage(reply)}
                className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]"
              >
                {reply}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex gap-2 border-t border-[var(--line)] p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about projects, skills, availability..."
              className="min-w-0 flex-1 rounded-full border border-[var(--line)] bg-background px-4 text-sm outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="grid size-11 place-items-center rounded-full bg-foreground text-background"
            >
              <Send size={17} />
            </button>
          </form>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
