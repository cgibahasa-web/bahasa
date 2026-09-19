import { eventFacts } from "@/content/event";

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
            {eventFacts.fee.amount}
          </p>
        </div>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            Termasuk dalam Biaya
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Rincian item yang termasuk dan tidak termasuk dalam biaya
            pendaftaran akan segera dilengkapi.]
          </p>
        </div>
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
            [Informasi jadwal dan jenis makanan yang disediakan akan segera
            dilengkapi.]
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Transportasi</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Informasi transportasi menuju dan selama acara akan segera
          dilengkapi.]
        </p>
      </section>
    </main>
  );
}
