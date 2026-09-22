import Image from "next/image";
import { eventFacts, feeInclusions, venuePhotos } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/venue",
  title: "Lokasi",
  description: `Fasilitas, akomodasi, dan cara menuju ${eventFacts.venue.id}.`,
});

export default function IdVenuePage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">Lokasi Acara</h1>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          {eventFacts.venue.id}
        </p>
      </section>

      <section className="px-6 py-14 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {venuePhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-4/3 overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt.id}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">
          Tentang {eventFacts.venue.id}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          Osanri Prayer Mountain adalah pusat doa puasa yang dikenal dengan
          Gua Doa (기도굴) untuk doa pribadi dan Bukit Elia (엘리야고지) yang
          dapat dikunjungi peserta pada waktu istirahat. [Deskripsi lokasi dan
          fasilitas lengkap akan segera dilengkapi.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold sm:text-xl">Akomodasi</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            {feeInclusions[0].id}. [Rincian jenis kamar akan segera
            dilengkapi.]
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Cara Menuju Lokasi</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          {eventFacts.transportInfo.id} [Tautan peta dan petunjuk arah rinci
          akan segera dilengkapi.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            Fasilitas di Lokasi
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Daftar fasilitas yang tersedia di lokasi acara akan segera
            dilengkapi.]
          </p>
        </div>
      </section>
    </main>
  );
}
