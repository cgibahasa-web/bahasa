import Image from "next/image";
import { eventFacts, venuePhotos } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/venue",
  title: "Venue",
  description: `Facilities, accommodation, and directions to ${eventFacts.venue.en}.`,
});

export default function EnVenuePage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">Venue</h1>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          {eventFacts.venue.en}
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
                alt={photo.alt.en}
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
          About {eventFacts.venue.en}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [A description of the Osanri Prayer Mountain campus and facilities
          will be added soon.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold sm:text-xl">Accommodation</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Information about room types and lodging facilities will be
            added soon.]
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">
          Getting There
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Directions from the airport/station and a map link will be added
          soon.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            On-site Facilities
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            [A list of facilities available on site will be added soon.]
          </p>
        </div>
      </section>
    </main>
  );
}
