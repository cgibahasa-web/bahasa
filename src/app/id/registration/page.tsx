import { eventFacts } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "/registration",
  title: "Pendaftaran",
  description: `Status pendaftaran ${eventFacts.name}.`,
});

export default function IdRegistrationPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-ivory px-6 py-24 text-center text-navy">
      <p className="text-sm font-medium text-navy/60">{eventFacts.name}</p>
      <h1 className="max-w-lg text-2xl font-semibold sm:text-3xl">
        Pendaftaran segera dibuka
      </h1>
      <p className="max-w-md text-sm text-navy/70 sm:text-base">
        Biaya pendaftaran: {eventFacts.fee.amount}. Batas pendaftaran:{" "}
        {eventFacts.registrationDeadline.id}.
      </p>
      <p className="max-w-md text-xs text-navy/60">{eventFacts.earlyBird.id}</p>
      <p className="max-w-md text-sm text-navy/70 sm:text-base">
        Hubungi kami untuk pertanyaan seputar pendaftaran.
      </p>
      <a
        href={`mailto:${eventFacts.contactEmail}`}
        className="mt-2 rounded-full bg-navy px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-navy/90 sm:text-base"
      >
        Hubungi Kami
      </a>
    </main>
  );
}
