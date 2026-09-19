import { eventFacts } from "@/content/event";

export default function IdPrivacyPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Kebijakan Privasi
        </h1>
      </section>

      <section className="mx-auto w-full max-w-2xl space-y-8 px-6 py-14 text-sm leading-relaxed text-navy/80 sm:px-10 sm:text-base">
        <p>
          Kebijakan ini menjelaskan bagaimana situs {eventFacts.name}{" "}
          mengelola data pengunjung dan peserta.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            1. Penyelenggara
          </h2>
          <p className="mt-2">
            Situs ini dikelola oleh {eventFacts.host}. [Nama badan hukum resmi
            dan alamat penyelenggara akan segera dilengkapi.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Data yang Dikumpulkan
          </h2>
          <p className="mt-2">
            Pada tahap saat ini, pendaftaran belum dibuka sehingga situs belum
            mengumpulkan data pendaftaran atau pembayaran. Jika Anda
            menghubungi kami melalui email, kami menerima nama, alamat email,
            dan isi pesan yang Anda kirimkan.
          </p>
          <p className="mt-2">
            [Rincian data yang akan dikumpulkan saat pendaftaran dibuka —
            termasuk data pribadi dan status pembayaran — akan dilengkapi
            sebelum fitur pendaftaran diaktifkan.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. Tujuan Penggunaan Data
          </h2>
          <p className="mt-2">
            Data yang dikirimkan melalui email digunakan untuk menjawab
            pertanyaan Anda seputar konferensi. [Tujuan penggunaan data
            pendaftaran akan dilengkapi bersama pembukaan pendaftaran.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Berbagi Data dengan Pihak Ketiga
          </h2>
          <p className="mt-2">
            [Informasi mengenai penyedia pembayaran (Midtrans) dan pihak
            ketiga lain yang akan menerima data peserta akan dilengkapi
            sebelum fitur pendaftaran dan pembayaran diaktifkan.]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            5. Jangka Waktu Penyimpanan
          </h2>
          <p className="mt-2">[Jangka waktu penyimpanan data akan dilengkapi.]</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            6. Hak Pengguna
          </h2>
          <p className="mt-2">
            Anda dapat meminta akses, koreksi, atau penghapusan data pribadi
            Anda dengan menghubungi{" "}
            <a
              href={`mailto:${eventFacts.contactEmail}`}
              className="underline underline-offset-4"
            >
              {eventFacts.contactEmail}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            7. Cookie dan Analitik
          </h2>
          <p className="mt-2">
            [Informasi mengenai penggunaan cookie dan alat analitik akan
            dilengkapi jika situs mengaktifkan fitur tersebut.]
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Terakhir diperbarui: [tanggal akan dilengkapi saat kebijakan ini
          disetujui secara resmi].
        </p>
      </section>
    </main>
  );
}
