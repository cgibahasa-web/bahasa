import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/terms",
  title: "Syarat & Ketentuan",
  description: `Syarat dan ketentuan penggunaan situs ${eventFacts.name}.`,
});

export default function IdTermsPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Syarat &amp; Ketentuan
        </h1>
      </section>

      <section className="mx-auto w-full max-w-2xl space-y-8 px-6 py-14 text-sm leading-relaxed text-navy/80 sm:px-10 sm:text-base">
        <div>
          <h2 className="text-lg font-semibold text-navy">
            1. Penggunaan Situs
          </h2>
          <p className="mt-2">
            Situs {eventFacts.name} ini disediakan untuk memberikan informasi
            resmi seputar acara. Konten situs tidak boleh disalin atau
            digunakan kembali untuk tujuan komersial tanpa izin tertulis dari{" "}
            {eventFacts.host}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Status Pendaftaran
          </h2>
          <p className="mt-2">
            Pendaftaran dan pembayaran untuk konferensi ini belum dibuka.
            Syarat dan ketentuan pendaftaran resmi — termasuk batas waktu,
            metode pembayaran, dan kebijakan pembatalan — akan diterbitkan
            saat pendaftaran dibuka.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. Kebijakan Pengembalian Dana
          </h2>
          <p className="mt-2">
            [Kebijakan pengembalian dana akan dilengkapi sebelum pendaftaran
            dan pembayaran dibuka.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Perubahan Jadwal atau Informasi
          </h2>
          <p className="mt-2">
            {eventFacts.host} berhak mengubah jadwal, program, atau informasi
            lain yang tercantum di situs ini. Perubahan akan diinformasikan
            melalui situs resmi.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">5. Kontak</h2>
          <p className="mt-2">
            Pertanyaan mengenai syarat dan ketentuan ini dapat dikirimkan ke{" "}
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
          Terakhir diperbarui: [tanggal akan dilengkapi saat ketentuan ini
          disetujui secara resmi].
        </p>
      </section>
    </main>
  );
}
