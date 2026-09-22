import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-ivory px-6 py-24 text-center text-navy">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        404
      </p>
      <h1 className="max-w-lg text-2xl font-semibold sm:text-3xl">
        Halaman tidak ditemukan / Page not found
      </h1>
      <p className="max-w-md text-sm text-navy/70 sm:text-base">
        Halaman yang Anda cari tidak tersedia. / The page you are looking for
        is not available.
      </p>
      <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-navy px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-navy/90 sm:text-base"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/en"
          className="rounded-full border border-navy/30 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5 sm:text-base"
        >
          Back to Home (EN)
        </Link>
      </div>
    </main>
  );
}
