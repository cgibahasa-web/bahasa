import { eventFacts } from "@/content/event";

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
            {eventFacts.fee.amount}
          </p>
        </div>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            What&apos;s Included
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Details of what is and isn&apos;t included in the registration
            fee will be added soon.]
          </p>
        </div>
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
            [Meal schedule and menu information will be added soon.]
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Transportation</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Transportation information to and during the event will be added
          soon.]
        </p>
      </section>
    </main>
  );
}
