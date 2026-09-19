import Link from "next/link";

export default function IdHomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-zinc-50 px-6 py-24 text-center dark:bg-black">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        2027 CGI BAHASA Conference
      </p>
      <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
        Konten situs sedang disiapkan
      </h1>
      <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400">
        Detail acara akan segera ditambahkan di sini.
      </p>
      <Link
        href="/en"
        className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
      >
        English
      </Link>
    </main>
  );
}
