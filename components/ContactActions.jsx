"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { SITE, mailto, whatsappLink } from "@/lib/site";

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";

/** No backend needed: the message is composed and opened in the visitor's email app or WhatsApp. */
export default function ContactActions() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const text = `${message}${name ? `\n\n— ${name}` : ""}`;
  const ready = message.trim().length > 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Write your message, then choose how to send it. It opens in your email app or WhatsApp, ready to send.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="c-name" className="mb-2 block text-sm font-semibold text-slate-700">Your name</label>
          <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="c-subject" className="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
          <input id="c-subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help?" className={field} />
        </div>
        <div>
          <label htmlFor="c-message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
          <textarea id="c-message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message..." className={`${field} resize-none`} />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={ready ? mailto(subject || "MasterKit enquiry", text) : undefined}
            aria-disabled={!ready}
            className={`btn-primary flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ${ready ? "" : "pointer-events-none opacity-50"}`}
          >
            <Mail size={17} /> Send by email
          </a>
          <a
            href={ready ? whatsappLink(`${subject ? `${subject}\n` : ""}${text}`) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!ready}
            className={`flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-semibold !text-white shadow-md shadow-emerald-500/25 transition hover:brightness-105 ${ready ? "" : "pointer-events-none opacity-50"}`}
          >
            <Send size={17} /> Send on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
