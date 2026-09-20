import { eventFacts, organizer } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/refund",
  title: "Kebijakan Pengembalian Dana",
  description: `Kebijakan pembatalan dan pengembalian dana untuk ${eventFacts.name}.`,
});

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
          untuk {eventFacts.name}.
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            1. Batas Pengembalian Dana Penuh
          </h2>
          <p className="mt-2">{eventFacts.refundPolicy.id}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Batas Akhir Pendaftaran
          </h2>
          <p className="mt-2">
            Batas akhir pendaftaran adalah {eventFacts.registrationDeadline.id}
            , yaitu tanggal yang sama dengan batas akhir pengembalian dana
            pada No. 1.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. Pengembalian Dana Akibat Penolakan Visa
          </h2>
          <p className="mt-2">
            Pembatalan akibat penolakan visa mengikuti kebijakan pengembalian
            dana umum pada No. 1: pembatalan yang diajukan sebelum batas
            waktu tersebut tetap mendapat pengembalian dana 100%, sedangkan
            pengajuan setelah batas waktu tersebut tidak dapat dikembalikan,
            termasuk jika disebabkan oleh penolakan visa.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Pengembalian Dana Akibat Pembatalan Acara
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
            5. Apabila Acara Ditunda
          </h2>
          <p className="mt-2">{eventFacts.eventPostponementPolicy.id}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            6. Pembayaran Ganda
          </h2>
          <p className="mt-2">{eventFacts.duplicatePaymentPolicy.id}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            7. Cara Pengajuan, Estimasi Waktu Proses, dan Metode Pengembalian
            Dana
          </h2>
          <p className="mt-2">
            Pengajuan pengembalian dana dilakukan dengan mengirim email ke{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
            </a>{" "}
            dengan mencantumkan nama, tanggal pendaftaran, jumlah yang
            dibayarkan, dan alasan pengembalian dana, paling lambat{" "}
            {eventFacts.registrationDeadline.id}.
          </p>
          <p className="mt-2">
            Estimasi waktu proses: {eventFacts.refundProcessingTime.id}.
          </p>
          <p className="mt-2">
            Metode pengembalian dana: {eventFacts.refundMethod.id}.
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Terakhir diperbarui: 2026-09-21 (cara pengajuan, estimasi waktu
          proses, metode pengembalian dana, kebijakan penundaan acara, dan
          penanganan pembayaran ganda ditambahkan menjelang tinjauan PG).
        </p>
      </section>
    </main>
  );
}
