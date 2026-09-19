import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

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
        <div>
          <h2 className="text-lg font-semibold text-navy">
            1. Use of This Site
          </h2>
          <p className="mt-2">
            The {eventFacts.name} website is provided to share official
            information about the event. Content on this site may not be
            copied or reused for commercial purposes without written
            permission from {eventFacts.host}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Registration Status
          </h2>
          <p className="mt-2">
            Registration and payment for this conference are not yet open.
            The registration deadline is{" "}
            {eventFacts.registrationDeadline.en}. {eventFacts.earlyBird.en}{" "}
            Payment methods will be announced once registration opens.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. Refund Policy
          </h2>
          <p className="mt-2">{eventFacts.refundPolicy.en}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Changes to Schedule or Information
          </h2>
          <p className="mt-2">
            {eventFacts.host} reserves the right to change the schedule,
            program, or other information listed on this site. Changes will
            be announced on the official website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">5. Contact</h2>
          <p className="mt-2">
            Questions about these terms may be sent to{" "}
            <a
              href={`mailto:${eventFacts.contactEmail}`}
              className="underline underline-offset-4"
            >
              {eventFacts.contactEmail}
            </a>
            .
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Last updated: [date to be added once these terms are formally
          approved].
        </p>
      </section>
    </main>
  );
}
