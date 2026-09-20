import { eventFacts, organizer } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/privacy",
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi situs ${eventFacts.name}.`,
});

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
            Situs ini dikelola oleh {organizer.legalName.ko} (
            {organizer.legalName.en}), badan nonprofit yang terdaftar dengan
            Nomor Registrasi Unik (No. Registrasi Badan Nonprofit)
            {" "}
            {organizer.registrationNumber}, berkedudukan di{" "}
            {organizer.address.ko}, Republic of Korea. Penyelenggara dapat
            dihubungi melalui{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
            </a>
            .
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
            Saat pendaftaran dibuka, situs ini akan mengumpulkan: nama,
            nomor kontak, alamat email, negara domisili, gereja/lembaga
            asal, jenis pendaftaran (individu/kelompok), dan status
            pembayaran. Informasi kartu pembayaran (nomor kartu, dll.) tidak
            disimpan oleh situs ini — data tersebut diproses langsung oleh
            penyedia layanan pembayaran (Payment Gateway) pihak ketiga.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. Tujuan Penggunaan Data
          </h2>
          <p className="mt-2">
            Data yang dikirimkan melalui email digunakan untuk menjawab
            pertanyaan Anda seputar konferensi. Data pendaftaran akan
            digunakan untuk: konfirmasi pendaftaran, pemrosesan pembayaran,
            pengiriman informasi acara, dan penerbitan surat undangan
            (invitation letter) apabila diperlukan.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Berbagi Data dengan Pihak Ketiga
          </h2>
          <p className="mt-2">
            Untuk pemrosesan pembayaran, informasi pendaftaran yang relevan
            (nama, jumlah pembayaran, dan data transaksi terkait) dibagikan
            kepada PortOne dan penyedia layanan pembayaran (PG) yang
            terhubung dengannya. Situs ini tidak membagikan data pribadi
            Anda kepada pihak ketiga lain di luar keperluan tersebut.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            5. Jangka Waktu Penyimpanan
          </h2>
          <p className="mt-2">
            Data pribadi peserta disimpan selama{" "}
            {organizer.dataRetentionPeriod.id}, atau sesuai jangka waktu yang
            diwajibkan oleh peraturan perundang-undangan yang berlaku
            (termasuk peraturan transaksi elektronik), lalu akan dihapus
            secara aman.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            6. Hak Pengguna
          </h2>
          <p className="mt-2">
            Anda dapat meminta akses, koreksi, atau penghapusan data pribadi
            Anda dengan menghubungi{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
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

        <div>
          <h2 className="text-lg font-semibold text-navy">
            8. Penanggung Jawab Perlindungan Data Pribadi
          </h2>
          <p className="mt-2">
            Penanggung jawab perlindungan data pribadi:{" "}
            {organizer.dataProtectionOfficer}. Pertanyaan dan permintaan
            terkait data pribadi dapat dikirimkan ke{" "}
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
          Terakhir diperbarui: [tanggal akan dilengkapi saat kebijakan ini
          disetujui secara resmi].
        </p>
      </section>
    </main>
  );
}
