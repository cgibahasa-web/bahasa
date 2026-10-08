import { eventFacts, organizer } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";
import { KoreanComplianceNotice } from "@/components/KoreanComplianceNotice";

export const metadata = buildMetadata({
  locale: "en",
  path: "/privacy",
  title: "Privacy Policy",
  description: `Privacy policy for the ${eventFacts.name} website.`,
});

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

        <KoreanComplianceNotice page="privacy" />

        <div>
          <h2 className="text-lg font-semibold text-navy">1. Organizer</h2>
          <p className="mt-2">
            This site is operated by {organizer.legalName.en} (
            {organizer.legalName.ko}), a registered nonprofit organization
            (Unique Registration No. {organizer.registrationNumber}) located
            at {organizer.address.en}. The organizer can be reached at{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Data We Collect
          </h2>
          <p className="mt-2">
            If you contact us by email, we receive your name, email address,
            and message content.
          </p>
          <p className="mt-2">
            The registration form on the Registration page collects: full
            name, email address, phone/WhatsApp number, country of
            residence, and home church/organization (optional for
            individual registration). For group registration, the form also
            collects the group/church name, number of participants, and a
            list of all participant names in the group. Because the payment
            system integration is not yet active, information you enter
            into the form is currently only held temporarily in your
            browser and is not sent to any server or third party. Once the
            payment system becomes active on {eventFacts.saleStartLabel.en},
            that data will be sent and processed as described in this
            section. Payment card information (such as card numbers) will
            not be stored by this site — it is processed directly by a
            third-party payment gateway.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. How We Use Data
          </h2>
          <p className="mt-2">
            Data sent by email is used to respond to your questions about
            the conference. Registration data will be used to: confirm
            registration, process payment, send event information, and issue
            an invitation letter where required.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Sharing with Third Parties
          </h2>
          <p className="mt-2">
            For payment processing, relevant registration information (name,
            payment amount, and related transaction data) is shared with
            PortOne as the payment gateway (PG), which for Indonesian local
            payment methods (GoPay, OVO, and others) connects to Midtrans as
            the local payment processor. This site does not share your
            personal data with any other third party beyond this purpose.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            5. Data Retention
          </h2>
          <p className="mt-2">
            Participants&apos; personal data is retained for{" "}
            {organizer.dataRetentionPeriod.en}, or as required by applicable
            law (including e-commerce/electronic transaction regulations),
            after which it is securely deleted.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            6. Your Rights
          </h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your
            personal data by contacting{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
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

        <div>
          <h2 className="text-lg font-semibold text-navy">
            8. Data Protection Officer
          </h2>
          <p className="mt-2">
            Data Protection Officer: {organizer.dataProtectionOfficer}.
            Inquiries and requests regarding personal data may be sent to{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
            </a>
            .
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Last updated: 2026-09-21 (data collected on the registration form
          and payment service providers confirmed ahead of PG review).
        </p>
      </section>
    </main>
  );
}
