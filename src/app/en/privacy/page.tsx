import { eventFacts } from "@/content/event";

export default function EnPrivacyPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h1 className="text-2xl font-bold sm:text-4xl">Privacy Policy</h1>
      </section>

      <section className="mx-auto w-full max-w-2xl space-y-8 px-6 py-14 text-sm leading-relaxed text-navy/80 sm:px-10 sm:text-base">
        <p>
          This policy explains how the {eventFacts.name} website handles
          visitor and participant data.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-navy">1. Organizer</h2>
          <p className="mt-2">
            This site is operated by {eventFacts.host}. [The official legal
            entity name and address of the organizer will be added soon.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Data We Collect
          </h2>
          <p className="mt-2">
            Registration is not yet open, so the site does not currently
            collect registration or payment data. If you contact us by
            email, we receive your name, email address, and message content.
          </p>
          <p className="mt-2">
            [Details of the data to be collected once registration opens —
            including personal data and payment status — will be added
            before the registration feature is activated.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. How We Use Data
          </h2>
          <p className="mt-2">
            Data sent by email is used to respond to your questions about
            the conference. [How registration data will be used will be
            added together with the registration launch.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Sharing with Third Parties
          </h2>
          <p className="mt-2">
            [Information about the payment provider (Midtrans) and any other
            third parties that will receive participant data will be added
            before the registration and payment features are activated.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            5. Data Retention
          </h2>
          <p className="mt-2">[The data retention period will be added.]</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            6. Your Rights
          </h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your
            personal data by contacting{" "}
            <a
              href={`mailto:${eventFacts.contactEmail}`}
              className="underline underline-offset-4"
            >
              {eventFacts.contactEmail}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            7. Cookies &amp; Analytics
          </h2>
          <p className="mt-2">
            [Information about cookies and analytics tools will be added if
            the site enables such features.]
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Last updated: [date to be added once this policy is formally
          approved].
        </p>
      </section>
    </main>
  );
}
