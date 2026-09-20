import { eventFacts } from "@/content/event";

export function isSaleOpen(now: Date = new Date()): boolean {
  return now >= new Date(`${eventFacts.saleStartDate}T00:00:00Z`);
}
