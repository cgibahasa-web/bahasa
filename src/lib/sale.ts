import { eventFacts } from "@/content/event";

export function isSaleOpen(now: Date = new Date()): boolean {
  return now >= new Date(`${eventFacts.saleStartDate}T00:00:00Z`);
}

// Lets a PG reviewer (e.g. Eximbay's onboarding review) reach the
// registration wizard's checkout screen before the public sale opens, via a
// secret `?preview=<token>` link, without exposing it to regular visitors.
// Unset REGISTRATION_PREVIEW_TOKEN disables this entirely.
export function isPreviewUnlocked(token: string | undefined): boolean {
  const expected = process.env.REGISTRATION_PREVIEW_TOKEN;
  return Boolean(expected && token === expected);
}
