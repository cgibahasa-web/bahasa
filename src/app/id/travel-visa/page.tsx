import { eventFacts } from "@/content/event";

export default function IdTravelVisaPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">
          Perjalanan &amp; Visa
        </h1>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          Panduan untuk peserta dari luar negeri
        </p>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Surat Undangan</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Informasi siapa yang berhak menerima surat undangan dan cara
          mengajukannya akan segera dilengkapi.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            Dokumen yang Diperlukan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Daftar dokumen yang perlu disiapkan untuk pengajuan visa akan
            segera dilengkapi.]
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">
          Periode Pengajuan
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Batas waktu dan alur pengajuan surat undangan/visa akan segera
          dilengkapi.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            Penanggung Jawab
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Kontak petugas yang menangani permintaan visa akan segera
            dilengkapi. Sementara ini, hubungi kami di{" "}
            <a
              href={`mailto:${eventFacts.contactEmail}`}
              className="underline underline-offset-4"
            >
              {eventFacts.contactEmail}
            </a>
            .]
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Catatan Penting</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Peringatan dan catatan penting seputar perjalanan akan segera
          dilengkapi.]
        </p>
      </section>
    </main>
  );
}
