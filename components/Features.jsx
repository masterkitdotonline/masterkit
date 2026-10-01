import {
  Zap,
  ShieldCheck,
  Smartphone,
  Layers3,
  MousePointerClick,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Easy",
    description:
      "Get your results quickly with simple tools designed for everyday tasks.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Friendly",
    description:
      "Your data stays in your browser whenever a tool can process it locally.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description:
      "Use our tools comfortably on desktop, tablet, or mobile devices.",
  },
  {
    icon: Layers3,
    title: "Many Categories",
    description:
      "Find tools for YouTube, Finance, Health, Math, Images, SEO and more.",
  },
  {
    icon: MousePointerClick,
    title: "Simple to Use",
    description:
      "No complicated setup. Choose a tool, enter your information and get results.",
  },
  {
    icon: RefreshCw,
    title: "Always Improving",
    description:
      "New useful tools and improvements are added regularly.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Why Use Our Tools
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need, in one place
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Simple, useful and accessible online tools designed to help you
            get things done faster.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition group-hover:bg-blue-50">
                  <Icon
                    size={23}
                    className="text-gray-700 transition group-hover:text-blue-600"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}