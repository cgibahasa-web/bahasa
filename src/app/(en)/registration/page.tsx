import { eventFacts, feeExclusions, feeInclusions } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";
import { isPaymentConfigured } from "@/lib/payment";
import { isSaleOpen } from "@/lib/sale";
import { RegistrationWizard } from "@/components/RegistrationWizard";

export const metadata = buildMetadata({
  locale: "en",
  path: "/registration",
  title: "Registration",
  description: `Registration for ${eventFacts.name}.`,
});

export const revalidate = 3600;

export default function EnRegistrationPage() {
  if (!isSaleOpen()) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-ivory px-6 py-24 text-center text-navy">
        <p className="text-sm font-medium text-navy/60">{eventFacts.name}</p>
        <h1 className="max-w-lg text-2xl font-semibold sm:text-3xl">
          Registration opens {eventFacts.saleStartLabel.en}
        </h1>
        <p className="mt-2 text-3xl font-bold text-brand-red sm:text-4xl">
          {eventFacts.fee.amount}
        </p>
        <p className="max-w-md text-xs text-navy/50">
          {eventFacts.fee.allInclusiveNote.en}
        </p>
        <div className="mt-4 grid max-w-md gap-4 text-left text-sm text-navy/70 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
              Included
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {feeInclusions.map((item) => (
                <li key={item.en}>{item.en}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
              Not Included
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {feeExclusions.map((item) => (
                <li key={item.en}>{item.en}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 max-w-md text-sm text-navy/70 sm:text-base">
          Contact us with any questions about registration.
        </p>
        <a
          href={`mailto:${eventFacts.contactEmail}`}
          className="mt-2 rounded-full bg-navy px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-navy/90 sm:text-base"
        >
          Contact Us
        </a>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eventFacts.name}
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">Registration</h1>
      </section>
      <RegistrationWizard locale="en" paymentConfigured={isPaymentConfigured()} />
    </main>
  );
}
