export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About MasterKit
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple Online Calculators & Useful Tools
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            MasterKit is a collection of simple online tools designed to help
            you perform everyday calculations and tasks quickly and easily.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="space-y-8">

          {/* About */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              What is MasterKit?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterKit provides free online calculators and practical tools
              for common tasks. Our goal is to make useful calculations easier
              to access without requiring users to install software or create
              an account.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              The website covers different categories including mathematics,
              finance, health, YouTube, images, text, SEO and developer tools.
              Each tool is designed with a simple interface so users can enter
              their information and get results without unnecessary steps.
            </p>
          </div>

          {/* What We Offer */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              What We Offer
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Mathematical Calculators
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Tools for percentages, areas and other everyday
                  mathematical calculations.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Finance Tools
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Useful calculators for common financial calculations such as
                  loans and payments.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  YouTube Tools
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Practical tools for creators working with YouTube content.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Productivity Tools
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Simple tools for text, images, SEO, development and other
                  everyday tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Our Approach
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We focus on creating tools that are straightforward and easy to
              understand. Each calculator should clearly explain what it does,
              what information is required, and how the result is calculated.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We also aim to improve existing tools and add new tools based on
              common user needs.
            </p>
          </div>

          {/* Accuracy */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Accuracy and Information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our calculators are intended for general informational and
              practical use. Results may depend on the information entered by
              the user and the assumptions used by a particular calculator.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              For important financial, medical, legal or professional
              decisions, users should verify results with an appropriately
              qualified professional or authoritative source.
            </p>
          </div>

          {/* Free Access */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Free and Accessible
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our tools are designed to be accessible directly from a web
              browser. We aim to keep the experience simple, fast and useful
              across desktop, tablet and mobile devices.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Have a Suggestion?
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
              If you have an idea for a useful calculator or tool, you can
              contact us and share your suggestion.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}