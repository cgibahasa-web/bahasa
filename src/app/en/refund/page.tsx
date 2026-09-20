import { eventFacts, organizer } from "@/content/event";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/refund",
  title: "Refund Policy",
  description: `Cancellation and refund policy for ${eventFacts.name}.`,
});

export default function EnRefundPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h1 className="text-2xl font-bold sm:text-4xl">Refund Policy</h1>
      </section>

      <section className="mx-auto w-full max-w-2xl space-y-8 px-6 py-14 text-sm leading-relaxed text-navy/80 sm:px-10 sm:text-base">
        <div className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-xs text-navy/70 sm:text-sm">
          This page explains the cancellation and refund policy for{" "}
          {eventFacts.name}.
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            1. Full Refund Deadline
          </h2>
          <p className="mt-2">{eventFacts.refundPolicy.en}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            2. Registration Deadline
          </h2>
          <p className="mt-2">
            The registration deadline is {eventFacts.registrationDeadline.en}
            , the same date as the full refund deadline in Section 1.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            3. Refunds for Visa Denial
          </h2>
          <p className="mt-2">
            Cancellations due to visa denial follow the general refund
            policy in Section 1: requests submitted before the deadline
            still receive a 100% refund, while requests submitted after the
            deadline are non-refundable, including in cases of visa denial.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            4. Refunds for Event Cancellation
          </h2>
          <p className="mt-2">
            If the event is fully cancelled by the organizer,{" "}
            {organizer.legalName.en} ({organizer.legalName.ko}) will refund
            all registration fees already paid, less any non-refundable
            transaction fees charged by the payment gateway (PG), where
            applicable.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            5. If the Event Is Postponed
          </h2>
          <p className="mt-2">{eventFacts.eventPostponementPolicy.en}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            6. Duplicate Payments
          </h2>
          <p className="mt-2">{eventFacts.duplicatePaymentPolicy.en}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy">
            7. How to Request a Refund, Processing Time, and Refund Method
          </h2>
          <p className="mt-2">
            To request a refund, email{" "}
            <a
              href={`mailto:${organizer.email}`}
              className="underline underline-offset-4"
            >
              {organizer.email}
            </a>{" "}
            with your name, registration date, amount paid, and the reason
            for the refund, no later than{" "}
            {eventFacts.registrationDeadline.en}.
          </p>
          <p className="mt-2">
            Processing time: {eventFacts.refundProcessingTime.en}.
          </p>
          <p className="mt-2">
            Refund method: {eventFacts.refundMethod.en}.
          </p>
        </div>

        <p className="text-xs text-navy/50">
          Last updated: 2026-09-21 (refund request method, processing time,
          refund method, event postponement, and duplicate payment handling
          added ahead of PG review).
        </p>
      </section>
    </main>
  );
}
