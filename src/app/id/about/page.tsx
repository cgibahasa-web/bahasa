import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/about",
  title: "Tentang Konferensi",
  description: `Tujuan, penyelenggara, dan peserta yang dituju ${eventFacts.name}.`,
});

export default function IdAboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">
          Tentang Konferensi
        </h1>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Tujuan Konferensi</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          {eventFacts.purpose.id}
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Tentang CGI</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          Konferensi ini diselenggarakan oleh {eventFacts.host}. [Profil dan
          sejarah singkat {eventFacts.host} akan segera dilengkapi.]
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-14 sm:px-10">
        <h2 className="text-lg font-semibold sm:text-xl">Sambutan</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          [Sambutan dari panitia penyelenggara akan segera dilengkapi.]
        </p>
      </section>

      <section className="bg-navy/5 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold sm:text-xl">
            Peserta yang Dituju
          </h2>
          <p className="mt-3 text-sm font-medium sm:text-base">
            {eventFacts.audience.id}
          </p>
        </div>
      </section>
    </main>
  );
}
