import Image from "next/image";
import {
  cgiIntro,
  cgiLogo,
  eventFacts,
  welcomeMessage,
  welcomeMessageAuthor,
} from "@/content/event";
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
          {eventFacts.purpose.en}
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">About CGI</h2>
        <Image
          src={cgiLogo.src}
          alt={cgiLogo.alt}
          width={cgiLogo.width}
          height={cgiLogo.height}
          className="mt-4 h-12 w-auto"
        />
        <p className="mt-4 text-sm leading-relaxed text-navy/70 sm:text-base">
          {cgiIntro.en}
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold sm:text-xl">
            Welcome Message
          </h2>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row">
            <div className="mx-auto w-40 shrink-0 sm:mx-0">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-navy/10">
                <Image
                  src={welcomeMessageAuthor.photo}
                  alt={welcomeMessageAuthor.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center text-sm font-semibold text-navy sm:text-left">
                {welcomeMessageAuthor.name}
              </p>
              <p className="text-center text-xs text-navy/60 sm:text-left">
                {welcomeMessageAuthor.title.en}
              </p>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-navy/70 sm:text-base">
              {welcomeMessage.en.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10">
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
