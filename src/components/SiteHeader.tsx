"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { cgiLogo, eventFacts } from "@/content/event";
import { localePath } from "@/lib/locale";

export function SiteHeader({ locale }: { locale: "id" | "en" }) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const otherLocale = locale === "id" ? "en" : "id";
  const localelessPath =
    locale === "id" ? pathname.replace(/^\/id/, "") : pathname;
  const altPath = localePath(otherLocale, localelessPath);

  // The root <html> tag is shared by every route, so it can't set the
  // correct lang per-locale on its own — sync it here instead.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Exposes the header's real (possibly multi-line) height as a CSS
  // variable so the hero video below it can size itself to exactly fill
  // the rest of the screen, on any viewport, without JS in that component.
  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.offsetHeight}px`,
      );
    };
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-20 border-b border-navy/10 bg-ivory/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 sm:px-10">
        <Link
          href={localePath(locale)}
          className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-navy sm:text-xl"
        >
          <Image
            src={cgiLogo.src}
            alt={cgiLogo.alt}
            width={cgiLogo.width}
            height={cgiLogo.height}
            className="h-8 w-auto sm:h-9"
            priority
          />
          <span>{eventFacts.name}</span>
        </Link>
        <nav
          aria-label={locale === "id" ? "Navigasi utama" : "Main navigation"}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={localePath(locale, `/${item.slug}`)}
              className="text-navy/70 transition-colors hover:text-navy"
            >
              {item[locale]}
            </Link>
          ))}
          <Link
            href={localePath(locale, "/registration")}
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
