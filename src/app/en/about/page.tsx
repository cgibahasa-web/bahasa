import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/about",
  title: "About",
  description: `Purpose, host, and target audience of ${eventFacts.name}.`,
});

export default function EnAboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">
          About the Conference
        </h1>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Purpose</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [A description of the conference&apos;s purpose and background will
          be added soon.]
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">About CGI</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          This conference is hosted by {eventFacts.host}. [A short profile
          and history of {eventFacts.host} will be added soon.]
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Welcome Message</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [A welcome message from the organizing committee will be added
          soon.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold sm:text-xl">
            Who Should Attend
          </h2>
          <p className="mt-3 text-sm font-medium sm:text-base">
            {eventFacts.audience.en}
          </p>
        </div>
      </section>
    </main>
  );
}
