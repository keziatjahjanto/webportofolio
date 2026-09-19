"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-2 text-ink-soft">
          Have a project in mind or just want to say hi? Send a message below.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-ink"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-baby-purple-deep focus:outline-none focus:ring-2 focus:ring-baby-purple/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-ink"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-baby-purple-deep focus:outline-none focus:ring-2 focus:ring-baby-purple/50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-ink"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-baby-purple-deep focus:outline-none focus:ring-2 focus:ring-baby-purple/50"
              placeholder="Tell me a bit about your project..."
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
