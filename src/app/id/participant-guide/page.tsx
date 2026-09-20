import { eventFacts, feeExclusions, feeInclusions } from "@/content/event";
import { programNotes } from "@/content/program";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/participant-guide",
  title: "Panduan Peserta",
  description: `Biaya pendaftaran, perlengkapan, makanan, dan transportasi untuk ${eventFacts.name}.`,
});

export default function IdParticipantGuidePage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">
          Panduan Peserta
        </h1>
      </section>

      <section className="px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold sm:text-xl">
            Biaya Pendaftaran
          </h2>
          <p className="mt-3 text-3xl font-bold text-brand-red sm:text-4xl">
            {eventFacts.fee.pending.id}
          </p>
          <p className="mt-4 text-sm text-navy/70 sm:text-base">
            Batas pendaftaran: {eventFacts.registrationDeadline.id}
          </p>
          <p className="mt-1 text-sm text-navy/60">
            {eventFacts.earlyBird.id}
          </p>
        </div>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            Termasuk dalam Biaya
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy/70 sm:text-base">
            {feeInclusions.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">
          Tidak Termasuk dalam Biaya
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy/70 sm:text-base">
          {feeExclusions.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Yang Perlu Dibawa</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Daftar barang bawaan yang disarankan akan segera dilengkapi.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">Makanan</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            {feeInclusions[1].id}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70 sm:text-base">
            {programNotes.id[0]}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Transportasi</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          {eventFacts.transportInfo.id}
        </p>
      </section>
    </main>
  );
}
