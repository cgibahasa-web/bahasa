import { eventFacts } from "@/content/event";
import { faqItems } from "@/content/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/faq",
  title: "FAQ",
  description: `Frequently asked questions about ${eventFacts.name}.`,
});

export default function EnFaqPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">
          Frequently Asked Questions
        </h1>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
        <ul className="space-y-4">
          {faqItems.map((item) => (
            <li
              key={item.en}
              className="rounded-lg border border-navy/10 bg-white px-5 py-4"
            >
              <p className="text-sm font-medium sm:text-base">{item.en}</p>
              <p className="mt-1 text-sm text-navy/60">{item.answer.en}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-navy/60">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href={`mailto:${eventFacts.contactEmail}`}
            className="font-medium text-navy underline underline-offset-4"
          >
            Contact us
          </a>
          .
        </p>
      </section>
    </main>
  );
}
