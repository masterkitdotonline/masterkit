export const metadata = {
  title: "Contact Us - MasterKit",
  description:
    "Contact MasterKit for questions, suggestions, feedback, or issues related to our online calculators and tools.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, suggestion, or found an issue with one of our
            tools? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterKit is built to provide simple and useful online
              calculators and tools. If you have feedback or need help with a
              tool, you can contact us using the information below.
            </p>

            <div className="mt-8 space-y-6">
              {/* <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">
                  support@MasterKit.com
                </p>
              </div> */}

              <div>
                <h3 className="font-semibold text-gray-900">Suggestions</h3>
                <p className="mt-1 leading-7 text-gray-600">
                  Have an idea for a new calculator or online tool? Send us
                  your suggestion and tell us what would be useful for you.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Report an Issue</h3>
                <p className="mt-1 leading-7 text-gray-600">
                  If you notice an incorrect result, broken feature, or other
                  technical issue, please let us know so we can review it.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send a Message
            </h2>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ / Help */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Before Contacting Us
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            If you are looking for a particular calculator or tool, check our
            All Tools page first. We regularly add new tools and improve
            existing ones based on user feedback.
          </p>
        </div>
      </section>
    </main>
  );
}