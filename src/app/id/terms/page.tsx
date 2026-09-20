import Link from "next/link";
import { eventFacts, organizer } from "@/content/event";
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
          <h2 className="text-lg font-semibold text-navy">Pasal 1 (Tujuan)</h2>
          <p className="mt-2">
            Syarat dan ketentuan ini mengatur ketentuan pendaftaran dan
            partisipasi dalam &quot;{eventFacts.name}&quot; yang
            diselenggarakan oleh {organizer.legalName.ko} (
            {organizer.legalName.en}), termasuk hak dan kewajiban antara
            penyelenggara dan peserta.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 2 (Definisi)
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              &quot;Peserta&quot; berarti individu yang mengajukan pendaftaran
              melalui situs ini untuk mengikuti acara.
            </li>
            <li>
              &quot;Biaya Pendaftaran&quot; berarti sejumlah biaya yang wajib
              dibayarkan peserta untuk mengikuti acara. Besarannya akan
              diumumkan melalui situs resmi sebelum pendaftaran dibuka.
            </li>
            <li>
              &quot;Pendaftaran Terkonfirmasi&quot; berarti status pendaftaran
              yang dianggap final setelah pembayaran biaya pendaftaran
              berhasil diselesaikan melalui penyedia layanan pembayaran (PG).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 3 (Keberlakuan dan Perubahan Syarat &amp; Ketentuan)
          </h2>
          <p className="mt-2">
            Syarat dan ketentuan ini berlaku sejak diumumkan di situs.
            Penyelenggara dapat mengubah syarat dan ketentuan ini sewaktu-waktu
            sesuai kebutuhan operasional, dan perubahan akan diberitahukan
            melalui situs resmi sebelum berlaku.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 4 (Pengajuan dan Persetujuan Pendaftaran)
          </h2>
          <p className="mt-2">
            Pendaftaran diajukan melalui pengisian formulir pendaftaran
            daring. Pendaftaran dianggap terkonfirmasi setelah peserta
            menyelesaikan pembayaran biaya pendaftaran secara penuh melalui
            penyedia layanan pembayaran (PG) yang ditunjuk oleh penyelenggara.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 5 (Biaya Pendaftaran dan Pembayaran)
          </h2>
          <p className="mt-2">
            Besaran biaya pendaftaran akan diumumkan melalui situs resmi
            sebelum pendaftaran dibuka. Pembayaran diproses melalui penyedia
            layanan pembayaran (Payment Gateway) pihak ketiga yang bekerja
            sama dengan penyelenggara; kartu
            kredit/debit dan metode pembayaran lokal Indonesia yang didukung
            dapat digunakan. Informasi pembayaran (nomor kartu, dll.) diproses
            dan disimpan langsung oleh penyedia layanan pembayaran, dan situs
            ini tidak menyimpan informasi kartu pembayaran peserta.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 6 (Pembatalan dan Pengembalian Dana)
          </h2>
          <p className="mt-2">
            Ketentuan pembatalan dan pengembalian dana diatur secara terpisah
            dalam{" "}
            <Link
              href="/id/refund"
              className="underline underline-offset-4"
            >
              Kebijakan Pengembalian Dana
            </Link>
            , yang merupakan bagian tidak terpisahkan dari syarat dan
            ketentuan ini.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 7 (Kewajiban Peserta)
          </h2>
          <p className="mt-2">
            Peserta bertanggung jawab penuh untuk memastikan kelengkapan
            dokumen perjalanan pribadinya, termasuk namun tidak terbatas pada
            paspor dan visa masuk ke Korea Selatan, serta memenuhi seluruh
            persyaratan imigrasi yang berlaku. Penyelenggara tidak
            bertanggung jawab atas kerugian yang timbul akibat kelalaian
            peserta dalam memenuhi persyaratan tersebut.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 8 (Pembatasan Tanggung Jawab)
          </h2>
          <p className="mt-2">
            Penyelenggara tidak bertanggung jawab atas perubahan, penundaan,
            atau pembatalan acara yang disebabkan oleh keadaan kahar (force
            majeure), termasuk namun tidak terbatas pada bencana alam,
            kebijakan pemerintah, atau kondisi di luar kendali wajar
            penyelenggara. Dalam hal demikian, penyelenggara akan
            menginformasikan langkah-langkah lebih lanjut melalui situs
            resmi.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Pasal 9 (Penyelesaian Sengketa dan Yurisdiksi)
          </h2>
          <p className="mt-2">
            Segala sengketa yang timbul sehubungan dengan syarat dan ketentuan
            ini akan diselesaikan terlebih dahulu melalui musyawarah antara
            para pihak. Apabila tidak tercapai kesepakatan, sengketa akan
            diselesaikan sesuai dengan hukum Republik Korea, dengan yurisdiksi
            pada pengadilan yang berwenang di domisili penyelenggara.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            Ketentuan Penutup
          </h2>
          <p className="mt-2">
            Syarat dan ketentuan ini mulai berlaku sejak tanggal pembukaan
            pendaftaran resmi diumumkan di situs ini.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">Kontak</h2>
          <p className="mt-2">
            Pertanyaan mengenai syarat dan ketentuan ini dapat dikirimkan ke{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
            </a>
            .
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Terakhir diperbarui: [tanggal akan dilengkapi saat pendaftaran
          resmi dibuka].
        </p>
      </section>
    </main>
  );
}
