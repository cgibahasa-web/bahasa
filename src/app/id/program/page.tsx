import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/program",
  title: "Program",
  description: `Jadwal harian ${eventFacts.name}, ${eventFacts.dates.id}.`,
});

const programDays = [
  { label: "Hari 1", date: "Senin, 11 Oktober 2027" },
  { label: "Hari 2", date: "Selasa, 12 Oktober 2027" },
  { label: "Hari 3", date: "Rabu, 13 Oktober 2027" },
  { label: "Hari 4", date: "Kamis, 14 Oktober 2027" },
];

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
        <p className="text-sm text-navy/60 sm:text-base">
          [Jadwal lengkap seminar, kebaktian, dan program pilihan akan segera
          dilengkapi. Susunan di bawah ini masih sementara.]
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
                  <dt>Sesi pagi</dt>
                  <dd>[Segera diumumkan]</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sesi siang</dt>
                  <dd>[Segera diumumkan]</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Kebaktian malam</dt>
                  <dd>[Segera diumumkan]</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Program pilihan</dt>
                  <dd>[Segera diumumkan]</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
