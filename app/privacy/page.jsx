export const metadata = {
  title: "Privacy Policy - MasterKit",
  description:
    "Read the Privacy Policy for MasterKit and learn how we handle information, cookies, advertising, and third-party services.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
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
              1. Introduction
            </h2>

            <p className="mt-4">
              Welcome to MasterKit. We provide free online calculators and
              useful tools for everyday tasks, including math, finance,
              health, YouTube, image, text, SEO, and developer-related tools.
            </p>

            <p className="mt-4">
              Your privacy is important to us. This Privacy Policy explains
              what information may be collected when you use our website and
              how that information may be used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              2. Information We Collect
            </h2>

            <p className="mt-4">
              Most of the tools on MasterKit can be used without creating an
              account or providing personal information.
            </p>

            <p className="mt-4">
              Depending on how you use the website, information may be
              collected automatically by our hosting, analytics, advertising,
              or other third-party service providers. This may include
              information such as browser type, device type, approximate
              location, pages visited, referring pages, and general usage
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              3. How We Use Information
            </h2>

            <p className="mt-4">
              Information may be used to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Operate and maintain our website.</li>
              <li>Improve our calculators and tools.</li>
              <li>Understand how visitors use our website.</li>
              <li>Detect technical problems and security issues.</li>
              <li>Improve website performance and user experience.</li>
              <li>Display and measure relevant advertising.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              4. Cookies
            </h2>

            <p className="mt-4">
              MasterKit and third-party services used on the website may use
              cookies or similar technologies. Cookies can help websites
              remember preferences, understand website usage, measure
              advertising performance, and provide relevant advertisements.
            </p>

            <p className="mt-4">
              You can control or disable cookies through your browser settings.
              Disabling certain cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              5. Google AdSense and Advertising
            </h2>

            <p className="mt-4">
              We may use Google AdSense or other advertising services to
              display advertisements on our website.
            </p>

            <p className="mt-4">
              Advertising providers may use cookies or similar technologies
              to show advertisements based on a user's visits to this and
              other websites, subject to the provider's applicable policies
              and settings.
            </p>

            <p className="mt-4">
              Users may be able to manage personalized advertising preferences
              through Google's advertising settings and other available
              privacy controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              6. Third-Party Services
            </h2>

            <p className="mt-4">
              Our website may use third-party services for hosting, analytics,
              security, advertising, or other website functionality.
            </p>

            <p className="mt-4">
              These third parties may process information according to their
              own privacy policies. We recommend reviewing the privacy
              policies of third-party services when applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              7. Calculator and Tool Data
            </h2>

            <p className="mt-4">
              Many Calculator tools process information directly in your
              browser. We do not require an account to use these tools.
            </p>

            <p className="mt-4">
              However, specific tools may work differently depending on their
              functionality and any third-party services they use. Avoid
              entering highly sensitive personal information into any online
              tool unless you understand how that tool processes the data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              8. Children's Privacy
            </h2>

            <p className="mt-4">
              MasterKit is a general-purpose website and is not specifically
              directed toward children. We do not knowingly request personal
              information from children through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              9. Data Security
            </h2>

            <p className="mt-4">
              We take reasonable measures to help protect our website and
              information processed through it. However, no internet
              transmission or electronic storage system can be guaranteed to
              be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              10. External Links
            </h2>

            <p className="mt-4">
              Our website may contain links to external websites or services.
              We are not responsible for the privacy practices, content, or
              security of third-party websites. Please review their respective
              privacy policies before providing information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              11. Changes to This Privacy Policy
            </h2>

            <p className="mt-4">
              We may update this Privacy Policy from time to time to reflect
              changes to our website, services, or legal requirements. Any
              updates will be posted on this page with a revised update date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              12. Contact Us
            </h2>

            <p className="mt-4">
              If you have questions about this Privacy Policy or our privacy
              practices, please visit our{" "}
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