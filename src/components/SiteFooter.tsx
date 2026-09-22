import Image from "next/image";
import Link from "next/link";
import { cgiLogo, eventFacts, organizer } from "@/content/event";
import { localePath } from "@/lib/locale";

const footerCopy = {
  id: {
    rights: "Hak cipta dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat & Ketentuan",
    refund: "Kebijakan Pengembalian Dana",
    organizer: "Penyelenggara",
    director: "Direktur",
    registration: "No. Registrasi",
    address: "Alamat",
    contact: "Kontak",
  },
  en: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    refund: "Refund Policy",
    organizer: "Organizer",
    director: "Director",
    registration: "Registration No.",
    address: "Address",
    contact: "Contact",
  },
} as const;

export function SiteFooter({ locale }: { locale: "id" | "en" }) {
  const t = footerCopy[locale];
  return (
    <footer className="border-t border-navy/10 bg-navy-deep px-6 py-10 text-center text-xs text-ivory/60 sm:px-10">
      <div className="mx-auto inline-block rounded-md bg-ivory px-3 py-2">
        <Image
          src={cgiLogo.src}
          alt={cgiLogo.alt}
          width={cgiLogo.width}
          height={cgiLogo.height}
          className="h-7 w-auto"
        />
      </div>
      <p className="mt-3 font-medium text-ivory/80">{eventFacts.name}</p>

      <div className="mx-auto mt-4 max-w-md space-y-1">
        <p>
          {t.organizer}: {organizer.legalName.ko} / {organizer.legalName.en}
        </p>
        <p>
          {t.director}: {organizer.representative.ko} (
          {organizer.representative.en})
        </p>
        <p>
          {t.registration}: {organizer.registrationNumber}
        </p>
        <p>
          {t.address}: {organizer.address.ko}, Republic of Korea
        </p>
        <p>
          {t.contact}:{" "}
          <a
            href={`mailto:${organizer.email}`}
            className="underline underline-offset-4"
          >
            {organizer.email}
          </a>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Link
          href={localePath(locale, "/terms")}
          className="underline underline-offset-4"
        >
          {t.terms}
        </Link>
        <Link
          href={localePath(locale, "/privacy")}
          className="underline underline-offset-4"
        >
          {t.privacy}
        </Link>
        <Link
          href={localePath(locale, "/refund")}
          className="underline underline-offset-4"
        >
          {t.refund}
        </Link>
      </div>
      <p className="mt-4">© 2027 CGI BAHASA Conference. {t.rights}</p>
    </footer>
  );
}
