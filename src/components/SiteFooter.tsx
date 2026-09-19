import Link from "next/link";
import { eventFacts } from "@/content/event";

const footerCopy = {
  id: {
    rights: "Hak cipta dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat & Ketentuan",
  },
  en: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
} as const;

export function SiteFooter({ locale }: { locale: "id" | "en" }) {
  const t = footerCopy[locale];
  return (
    <footer className="border-t border-navy/10 bg-navy-deep px-6 py-10 text-center text-xs text-ivory/60 sm:px-10">
      <p className="font-medium text-ivory/80">{eventFacts.name}</p>
      <p className="mt-1">
        <a
          href={`mailto:${eventFacts.contactEmail}`}
          className="underline underline-offset-4"
        >
          {eventFacts.contactEmail}
        </a>
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <Link
          href={`/${locale}/privacy`}
          className="underline underline-offset-4"
        >
          {t.privacy}
        </Link>
        <Link
          href={`/${locale}/terms`}
          className="underline underline-offset-4"
        >
          {t.terms}
        </Link>
      </div>
      <p className="mt-4">© 2027 CGI. {t.rights}</p>
    </footer>
  );
}
