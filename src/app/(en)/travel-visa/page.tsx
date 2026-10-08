import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/travel-visa",
  title: "Travel",
  description: `Travel information for overseas participants of ${eventFacts.name}.`,
});

export default function EnTravelVisaPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">Travel</h1>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          Information for overseas participants
        </p>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">
          Getting to Osanri Prayer Mountain
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          {eventFacts.transportInfo.en}
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            Important Notes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Notes on weather, clothing, and other travel preparation will be
            added soon.]
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">
          Other Questions
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          For travel-related questions, contact us at{" "}
          <a
            href={`mailto:${eventFacts.contactEmail}`}
            className="underline underline-offset-4"
          >
            {eventFacts.contactEmail}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
