import Image from "next/image";
import Link from "next/link";
import { eventFacts, venuePhotos } from "@/content/event";
import { faqItems } from "@/content/faq";

const programDays = [
  { label: "Day 1", date: "11 October" },
  { label: "Day 2", date: "12 October" },
  { label: "Day 3", date: "13 October" },
  { label: "Day 4", date: "14 October" },
];

export default function EnHomePage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      {/* 1. Event name, theme, date, venue, primary CTA */}
      <section className="relative isolate flex min-h-[85vh] flex-col items-center justify-end overflow-hidden px-6 pb-16 pt-24 text-center text-ivory sm:px-10">
        <Image
          src={venuePhotos[2].src}
          alt={venuePhotos[2].alt.en}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy-deep/55" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
          {eventFacts.name}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
          {eventFacts.theme.en}
        </h1>
        <p className="mt-2 max-w-xl text-sm italic text-ivory/80 sm:text-base">
          {eventFacts.theme.id}
        </p>
        <dl className="mt-8 flex flex-col gap-2 text-sm sm:flex-row sm:gap-8 sm:text-base">
          <div>
            <dt className="sr-only">Date</dt>
            <dd>{eventFacts.dates.en}</dd>
          </div>
          <div>
            <dt className="sr-only">Venue</dt>
            <dd>{eventFacts.venue.en}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col items-center gap-2">
          <Link
            href="/en/registration"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold/90 sm:text-base"
          >
            Register Now
          </Link>
          <p className="text-xs text-ivory/70">Registration opening soon</p>
        </div>
      </section>

      {/* 2. Purpose & target audience */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center sm:px-10">
        <h2 className="text-xl font-semibold sm:text-2xl">
          About the Conference
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-navy/70 sm:text-base">
          [A description of the conference&apos;s purpose and background will
          be added soon.]
        </p>
        <p className="mt-6 text-sm font-medium sm:text-base">
          {eventFacts.audience.en}
        </p>
        <p className="mt-1 text-sm text-navy/60">
          Hosted by {eventFacts.host}
        </p>
      </section>

      {/* 3. Program preview */}
      <section className="bg-navy px-6 py-16 text-ivory sm:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Program
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {programDays.map((day) => (
              <li
                key={day.label}
                className="rounded-lg border border-ivory/15 px-3 py-4 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {day.label}
                </p>
                <p className="mt-1 text-sm">{day.date}</p>
                <p className="mt-2 text-xs text-ivory/60">
                  To be announced
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/en/program"
              className="text-sm font-medium text-gold underline underline-offset-4"
            >
              View Full Program
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Venue / worship photos */}
      <section className="px-6 py-16 sm:px-10">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          Osanri Prayer Mountain
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
          {venuePhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
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

      {/* 5. Fee & inclusions */}
      <section className="bg-navy/5 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Registration Fee
          </h2>
          <p className="mt-4 text-3xl font-bold text-brand-red sm:text-4xl">
            {eventFacts.fee.amount}
          </p>
          <p className="mt-4 text-sm text-navy/70 sm:text-base">
            [Details of what is included in the registration fee will be
            added soon.]
          </p>
        </div>
      </section>

      {/* 6. Overseas participant guidance */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Preparing as an Overseas Participant
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy/70 sm:text-base">
            [Visa, invitation letter, and travel information for overseas
            participants will be added soon.]
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-navy/5 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <ul className="mt-8 space-y-4">
            {faqItems.slice(0, 3).map((item) => (
              <li
                key={item.en}
                className="rounded-lg border border-navy/10 bg-white px-5 py-4"
              >
                <p className="text-sm font-medium sm:text-base">{item.en}</p>
                <p className="mt-1 text-sm text-navy/60">
                  [Answer to be added soon]
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link
              href="/en/faq"
              className="text-sm font-medium text-navy underline underline-offset-4"
            >
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Registration / contact CTA */}
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h2 className="text-xl font-semibold sm:text-2xl">Ready to Join?</h2>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          Registration is opening soon.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/en/registration"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold/90 sm:text-base"
          >
            Register Now
          </Link>
          <a
            href={`mailto:${eventFacts.contactEmail}`}
            className="rounded-full border border-ivory/40 px-8 py-3 text-sm font-semibold transition-colors hover:bg-ivory/10 sm:text-base"
          >
            Contact Us
          </a>
        </div>
        <p className="mt-6 text-xs text-ivory/50">{eventFacts.contactEmail}</p>
      </section>
    </main>
  );
}
