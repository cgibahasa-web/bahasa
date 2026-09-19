import { eventFacts } from "@/content/event";
import { programNotes, programSchedule } from "@/content/program";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/program",
  title: "Program",
  description: `Jadwal harian ${eventFacts.name}, ${eventFacts.dates.id}.`,
});

export default function IdProgramPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">Program Acara</h1>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          {eventFacts.dates.id} · {eventFacts.venue.id}
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10">
        <ol className="space-y-6">
          {programSchedule.map((day, index) => (
            <li
              key={day.dateId}
              className="rounded-xl border border-navy/10 bg-white px-6 py-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                Hari {index + 1}
              </p>
              <p className="mt-1 text-base font-semibold sm:text-lg">
                {day.dateId}
              </p>
              {day.noteId && (
                <p className="mt-1 text-xs font-medium text-brand-red">
                  {day.noteId}
                </p>
              )}
              <dl className="mt-4 space-y-2 text-sm text-navy/70 sm:text-base">
                {day.items.map((item) => (
                  <div
                    key={item.time}
                    className="flex justify-between gap-4 border-b border-navy/5 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="shrink-0 font-mono text-xs text-navy/50 sm:text-sm">
                      {item.time}
                    </dt>
                    <dd className="text-right">{item.id}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>

        <ul className="mt-8 space-y-2 text-xs text-navy/60 sm:text-sm">
          {programNotes.id.map((note) => (
            <li key={note}>※ {note}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
