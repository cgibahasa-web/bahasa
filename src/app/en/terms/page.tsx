import Link from "next/link";
import { eventFacts, organizer } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";
import { KoreanComplianceNotice } from "@/components/KoreanComplianceNotice";

export const metadata = buildMetadata({
  locale: "en",
  path: "/terms",
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${eventFacts.name} website.`,
});

export default function EnTermsPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Terms &amp; Conditions
        </h1>
      </section>

      <section className="mx-auto w-full max-w-2xl space-y-8 px-6 py-14 text-sm leading-relaxed text-navy/80 sm:px-10 sm:text-base">
        <KoreanComplianceNotice page="terms" />

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 1 (Purpose)
          </h2>
          <p className="mt-2">
            These terms and conditions govern the registration and
            participation requirements for &quot;{eventFacts.name}&quot;,
            organized by {organizer.legalName.en} ({organizer.legalName.ko}
            ), including the rights and obligations between the organizer
            and participants.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 2 (Definitions)
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              &quot;Participant&quot; means an individual who submits a
              registration through this site to attend the event.
            </li>
            <li>
              &quot;Registration Fee&quot; means the amount a participant
              must pay to attend the event, which is {eventFacts.fee.amount}.{" "}
              {eventFacts.fee.allInclusiveNote.en}
            </li>
            <li>
              &quot;Confirmed Registration&quot; means a registration status
              that becomes final once the registration fee has been
              successfully paid through the designated payment gateway (PG).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 3 (Effect and Amendment of These Terms)
          </h2>
          <p className="mt-2">
            These terms take effect upon publication on the site. The
            organizer may amend these terms as operationally necessary, and
            any changes will be announced on the official website before
            taking effect.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 4 (Registration Application and Acceptance)
          </h2>
          <p className="mt-2">
            Registration is submitted by completing the online registration
            form. A registration is considered confirmed once the
            participant has fully paid the registration fee through the
            payment gateway (PG) designated by the organizer.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 5 (Registration Fee and Payment)
          </h2>
          <p className="mt-2">
            The registration fee is {eventFacts.fee.amount}, effective from{" "}
            {eventFacts.saleStartLabel.en}, when registration opens.{" "}
            {eventFacts.paymentProviderNote.en} Supported credit/debit cards
            and Indonesian local payment methods may be used. Payment
            information (such as card numbers) is processed and stored
            directly by the payment gateway, and this site does not store
            participants&apos; payment card information.{" "}
            {eventFacts.currencyNote.en}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 6 (Cancellation and Refunds)
          </h2>
          <p className="mt-2">
            Cancellation and refund terms are set out separately in the{" "}
            <Link href="/en/refund" className="underline underline-offset-4">
              Refund Policy
            </Link>
            , which forms an integral part of these terms and conditions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 7 (Registration Confirmation and Event Entry)
          </h2>
          <p className="mt-2">{eventFacts.postPaymentInfo.en}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 8 (Participant Obligations)
          </h2>
          <p className="mt-2">
            Participants are solely responsible for ensuring their own
            travel documentation is in order, including but not limited to
            a passport and entry visa for South Korea, and for meeting all
            applicable immigration requirements. The organizer is not liable
            for any loss arising from a participant&apos;s failure to meet
            these requirements.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 9 (Limitation of Liability)
          </h2>
          <p className="mt-2">
            The organizer is not liable for changes, postponement, or
            cancellation of the event caused by force majeure, including but
            not limited to natural disasters, government measures, or
            circumstances reasonably beyond the organizer&apos;s control. In
            such cases, the organizer will announce further steps on the
            official website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Article 10 (Dispute Resolution and Jurisdiction)
          </h2>
          <p className="mt-2">
            Disputes arising in connection with these terms will first be
            resolved through good-faith consultation between the parties. If
            no agreement is reached, disputes will be resolved under the
            laws of the Republic of Korea, with jurisdiction in the
            competent court of the organizer&apos;s domicile.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Supplementary Provision
          </h2>
          <p className="mt-2">
            These terms and conditions take effect from{" "}
            {eventFacts.saleStartLabel.en}, the date official registration
            opens.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">Contact</h2>
          <p className="mt-2">
            Questions about these terms may be sent to{" "}
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
          Last updated: 2026-09-21 (registration fee, PG structure, and
          registration confirmation/event entry confirmed ahead of PG
          review).
        </p>
      </section>
    </main>
  );
}
