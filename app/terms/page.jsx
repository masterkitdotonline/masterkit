export const metadata = {
  title: "Terms of Use - MasterKit",
  description:
    "Read the Terms of Use for MasterKit, including acceptable use, tool accuracy, third-party services, and website usage.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-4 text-gray-600">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-10 leading-7 text-gray-600">

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4">
              Welcome to MasterKit. By accessing or using this website, you
              agree to comply with these Terms of Use. If you do not agree with
              these terms, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              2. About Our Services
            </h2>

            <p className="mt-4">
              MasterKit provides free online calculators and useful tools for
              general informational and everyday purposes. Our tools may
              include calculators and utilities related to math, finance,
              health, YouTube, images, text, SEO, and other categories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              3. General Information Only
            </h2>

            <p className="mt-4">
              The information and results provided by MasterKit are intended
              for general informational purposes only. They should not be
              considered professional financial, medical, legal, tax,
              accounting, or other professional advice.
            </p>

            <p className="mt-4">
              For important decisions, you should verify information with an
              appropriately qualified professional or authoritative source.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              4. Accuracy of Results
            </h2>

            <p className="mt-4">
              We make reasonable efforts to provide useful and accurate
              calculators and tools. However, we do not guarantee that every
              calculation, result, description, or piece of information will
              always be complete, accurate, current, or error-free.
            </p>

            <p className="mt-4">
              You are responsible for checking results before relying on them
              for important decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              5. Acceptable Use
            </h2>

            <p className="mt-4">
              You agree to use MasterKit only for lawful purposes and in a way
              that does not interfere with the operation or security of the
              website.
            </p>

            <p className="mt-4">You must not:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Attempt to damage or disrupt the website.</li>
              <li>Attempt to gain unauthorized access to our systems.</li>
              <li>Use automated methods to abuse or overload our services.</li>
              <li>Use our tools for unlawful activities.</li>
              <li>Attempt to bypass security or technical restrictions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              6. Intellectual Property
            </h2>

            <p className="mt-4">
              Unless otherwise stated, the website's original content,
              branding, design, text, graphics, and functionality are owned
              by or licensed to MasterKit.
            </p>

            <p className="mt-4">
              You may use our tools for their intended personal or lawful
              purposes. You may not copy, reproduce, redistribute, or
              republish substantial portions of our website without
              appropriate permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              7. Third-Party Services and Links
            </h2>

            <p className="mt-4">
              MasterKit may use or link to third-party services, websites,
              APIs, advertising platforms, or other external resources.
            </p>

            <p className="mt-4">
              We do not control third-party websites or services and are not
              responsible for their content, availability, policies, or
              practices. Your use of third-party services may be subject to
              their own terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              8. Advertising
            </h2>

            <p className="mt-4">
              MasterKit may display advertisements from third-party
              advertising providers. Advertisements may be selected or
              delivered based on various factors and may use cookies or
              similar technologies according to the applicable advertising
              provider's policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              9. Availability
            </h2>

            <p className="mt-4">
              We aim to keep Calculator available and functional, but we do
              not guarantee that the website or every tool will always be
              available, uninterrupted, or free from technical errors.
            </p>

            <p className="mt-4">
              We may modify, update, suspend, or discontinue any part of the
              website or its tools without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              10. Limitation of Liability
            </h2>

            <p className="mt-4">
              To the extent permitted by applicable law, Calculator and its
              operators will not be responsible for losses, damages, or
              consequences resulting from your use of the website, reliance on
              calculator results, temporary unavailability, technical errors,
              or information obtained through third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              11. Changes to These Terms
            </h2>

            <p className="mt-4">
              We may update these Terms of Use from time to time. Changes will
              be posted on this page with an updated revision date. Your
              continued use of the website after changes are posted means that
              you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              12. Contact Us
            </h2>

            <p className="mt-4">
              If you have questions about these Terms of Use, please visit our{" "}
              <a
                href="/contact"
                className="font-medium text-gray-900 underline underline-offset-4"
              >
                Contact Us
              </a>{" "}
              page.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}