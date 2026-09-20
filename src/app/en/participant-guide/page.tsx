import { eventFacts, feeExclusions, feeInclusions } from "@/content/event";
import { programNotes } from "@/content/program";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/participant-guide",
  title: "Participant Guide",
  description: `Registration fee, what to bring, meals, and transportation for ${eventFacts.name}.`,
});

export default function EnParticipantGuidePage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">
          Participant Guide
        </h1>
      </section>

      <section className="px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold sm:text-xl">
            Registration Fee
          </h2>
          <p className="mt-3 text-3xl font-bold text-brand-red sm:text-4xl">
            {eventFacts.fee.pending.en}
          </p>
          <p className="mt-4 text-sm text-navy/70 sm:text-base">
            Registration deadline: {eventFacts.registrationDeadline.en}
          </p>
          <p className="mt-1 text-sm text-navy/60">{eventFacts.earlyBird.en}</p>
        </div>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            What&apos;s Included
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy/70 sm:text-base">
            {feeInclusions.map((item) => (
              <li key={item.en}>{item.en}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Not Included</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy/70 sm:text-base">
          {feeExclusions.map((item) => (
            <li key={item.en}>{item.en}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">What to Bring</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [A list of recommended items to bring will be added soon.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">Meals</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            {feeInclusions[1].en}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70 sm:text-base">
            {programNotes.en[0]}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Transportation</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          {eventFacts.transportInfo.en}
        </p>
      </section>
    </main>
  );
}
