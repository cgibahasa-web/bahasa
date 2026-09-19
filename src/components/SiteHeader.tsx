"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { eventFacts } from "@/content/event";

export function SiteHeader({ locale }: { locale: "id" | "en" }) {
  const pathname = usePathname();
  const otherLocale = locale === "id" ? "en" : "id";
  const altPath = pathname.replace(/^\/(id|en)/, `/${otherLocale}`);

  return (
    <header className="sticky top-0 z-20 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 sm:px-10">
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-wide text-navy"
        >
          {eventFacts.name}
        </Link>
        <nav
          aria-label={locale === "id" ? "Navigasi utama" : "Main navigation"}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/${item.slug}`}
              className="text-navy/70 transition-colors hover:text-navy"
            >
              {item[locale]}
            </Link>
          ))}
          <Link
            href={`/${locale}/registration`}
            className="rounded-full bg-gold px-4 py-1.5 font-semibold text-navy-deep transition-colors hover:bg-gold/90"
          >
            {locale === "id" ? "Daftar" : "Register"}
          </Link>
          <Link
            href={altPath}
            className="font-medium text-navy underline underline-offset-4"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
