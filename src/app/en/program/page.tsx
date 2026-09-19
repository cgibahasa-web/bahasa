import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/program",
  title: "Program",
  description: `Daily schedule for ${eventFacts.name}, ${eventFacts.dates.en}.`,
});

const programDays = [
  { label: "Day 1", date: "Monday, 11 October 2027" },
  { label: "Day 2", date: "Tuesday, 12 October 2027" },
  { label: "Day 3", date: "Wednesday, 13 October 2027" },
  { label: "Day 4", date: "Thursday, 14 October 2027" },
];

export default function EnProgramPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">Program</h1>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          {eventFacts.dates.en} · {eventFacts.venue.en}
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10">
        <p className="text-sm text-navy/60 sm:text-base">
          [The full seminar, worship, and elective program schedule will be
          added soon. The outline below is provisional.]
        </p>

        <ol className="mt-8 space-y-6">
          {programDays.map((day) => (
            <li
              key={day.label}
              className="rounded-xl border border-navy/10 bg-white px-6 py-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                {day.label}
              </p>
              <p className="mt-1 text-base font-semibold sm:text-lg">
                {day.date}
              </p>
              <dl className="mt-4 space-y-2 text-sm text-navy/70 sm:text-base">
                <div className="flex justify-between gap-4">
                  <dt>Morning session</dt>
                  <dd>[To be announced]</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Afternoon session</dt>
                  <dd>[To be announced]</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Evening service</dt>
                  <dd>[To be announced]</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Elective program</dt>
                  <dd>[To be announced]</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
