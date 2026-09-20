import { eventFacts, organizer } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/refund",
  title: "Kebijakan Pengembalian Dana",
  description: `Kebijakan pembatalan dan pengembalian dana untuk ${eventFacts.name}.`,
});

const PENDING = "Detail ini masih menunggu konfirmasi resmi tim keuangan.";

export default function IdRefundPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Kebijakan Pengembalian Dana
        </h1>
      </section>

      <section className="mx-auto w-full max-w-2xl space-y-8 px-6 py-14 text-sm leading-relaxed text-navy/80 sm:px-10 sm:text-base">
        <div className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-xs text-navy/70 sm:text-sm">
          Halaman ini menjelaskan kebijakan pembatalan dan pengembalian dana
          untuk {eventFacts.name}. Sebagian detail yang ditandai &quot;
          {PENDING}&quot; masih menunggu konfirmasi akhir dari tim keuangan.
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            1. Diskon Pendaftaran Awal (Early Bird)
          </h2>
          <p className="mt-2">{PENDING}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Batas Pengembalian Dana Penuh
          </h2>
          <p className="mt-2">{eventFacts.refundPolicy.id}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. Batas Akhir Pendaftaran
          </h2>
          <p className="mt-2">
            Batas akhir pendaftaran adalah {eventFacts.registrationDeadline.id}
            , yaitu tanggal yang sama dengan batas akhir pengembalian dana
            pada No. 2.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Pengembalian Dana Akibat Penolakan Visa
          </h2>
          <p className="mt-2">
            Pembatalan akibat penolakan visa mengikuti kebijakan pengembalian
            dana umum pada No. 2: pembatalan yang diajukan sebelum batas
            waktu tersebut tetap mendapat pengembalian dana 100%, sedangkan
            pengajuan setelah batas waktu tersebut tidak dapat dikembalikan,
            termasuk jika disebabkan oleh penolakan visa.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            5. Pengembalian Dana Akibat Pembatalan Acara
          </h2>
          <p className="mt-2">
            Apabila acara dibatalkan sepenuhnya oleh penyelenggara,{" "}
            {organizer.legalName.ko} ({organizer.legalName.en}) akan
            mengembalikan seluruh biaya pendaftaran yang telah dibayarkan,
            dikurangi biaya transaksi yang tidak dapat dikembalikan oleh
            penyedia layanan pembayaran (PG) apabila berlaku.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            6. Cara Pengajuan dan Estimasi Waktu Proses
          </h2>
          <p className="mt-2">
            Pengajuan pengembalian dana dilakukan dengan menghubungi{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
            </a>{" "}
            paling lambat {eventFacts.registrationDeadline.id}. Estimasi
            waktu proses: {PENDING}
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Terakhir diperbarui: 2026-09-20 (batas pengembalian dana
          dikonfirmasi satu bulan sebelum acara).
        </p>
      </section>
    </main>
  );
}
