import { Mail, MessageCircle, Clock, Lightbulb, Bug } from "lucide-react";
import ContactActions from "@/components/ContactActions";
import { SITE, mailto, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact MasterKit by email or WhatsApp for questions, tool suggestions, bug reports, feedback and business enquiries.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const cards = [
  {
    icon: Mail,
    gradient: "from-indigo-500 to-violet-600",
    title: "Email",
    value: SITE.email,
    href: mailto("MasterKit enquiry"),
    action: "Send an email",
  },
  {
    icon: MessageCircle,
    gradient: "from-emerald-400 to-green-600",
    title: "WhatsApp",
    value: SITE.whatsappLabel,
    href: whatsappLink("Hello MasterKit, "),
    action: "Chat on WhatsApp",
    external: true,
  },
];

const topics = [
  { icon: Lightbulb, title: "Suggest a tool", text: "Tell us which new tool would make your day easier." },
  { icon: Bug, title: "Report an issue", text: "Wrong result or broken feature? Share the tool name and what you entered." },
  { icon: Clock, title: "Response time", text: `We usually reply ${SITE.responseTime}.` },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Get in <span className="text-gradient">touch</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Questions, suggestions, bug reports or business enquiries – reach us by email or WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map(({ icon: Icon, gradient, title, value, href, action, external }) => (
            <a
              key={title}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                <Icon size={26} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-500">{title}</span>
                <span className="block break-all text-lg font-bold text-slate-900">{value}</span>
                <span className="mt-1 block text-sm font-semibold text-indigo-600">{action} →</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">How can we help?</h2>
            {topics.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <ContactActions />
          </div>
        </div>
      </section>
    </main>
  );
}
