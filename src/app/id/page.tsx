import Image from "next/image";
import Link from "next/link";
import { eventFacts, heroImage, venuePhotos } from "@/content/event";
import { faqItems } from "@/content/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  locale: "id",
  path: "",
  title: `${eventFacts.name} — ${eventFacts.theme.id}`,
  description: `${eventFacts.dates.id} di ${eventFacts.venue.id}. Situs resmi ${eventFacts.name}.`,
  absoluteTitle: true,
});

const programDays = [
  { label: "Hari 1", date: "11 Oktober", highlight: "Ibadah Pembukaan" },
  { label: "Hari 2", date: "12 Oktober", highlight: "Seminar & KKR I" },
  { label: "Hari 3", date: "13 Oktober", highlight: "Seminar & KKR II" },
  { label: "Hari 4", date: "14 Oktober", highlight: "Kesaksian & Kepulangan" },
];

export default function IdHomePage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory text-navy">
      {/* 1. Hero: 행사명, 주제, 날짜, 장소, 주 행동 버튼 */}
      <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-ivory sm:px-10">
        <Image
          src={heroImage.src}
          alt={heroImage.alt.id}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep/85 via-navy-deep/25 to-navy-deep/40" />

        <p className="hero-text-shadow rounded-full border border-gold/50 bg-navy-deep/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold sm:text-sm">
          {eventFacts.name}
        </p>

        <h1 className="hero-text-shadow mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
          {eventFacts.themeLines.id[0]}
          <br />
          {eventFacts.themeLines.id[1]}
        </h1>
        <p className="hero-text-shadow mt-3 max-w-2xl text-base italic text-ivory/90 sm:text-xl">
          {eventFacts.theme.en}
        </p>

        <dl className="hero-text-shadow mt-10 flex flex-col gap-2 text-base font-medium sm:flex-row sm:gap-8 sm:text-lg">
          <div>
            <dt className="sr-only">Tanggal</dt>
            <dd>{eventFacts.dates.id}</dd>
          </div>
          <div className="hidden text-gold sm:block" aria-hidden="true">
            ·
          </div>
          <div>
            <dt className="sr-only">Lokasi</dt>
            <dd>{eventFacts.venue.id}</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/id/registration"
            className="rounded-full bg-gold px-10 py-4 text-base font-bold text-navy-deep shadow-lg shadow-navy-deep/40 transition-colors hover:bg-gold/90 sm:text-lg"
          >
            Daftar Sekarang
          </Link>
          <p className="hero-text-shadow text-xs text-ivory/80 sm:text-sm">
            Pendaftaran segera dibuka
          </p>
        </div>
      </section>

      {/* 2. 행사 목적과 참가 대상 */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center sm:px-10">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Tentang Konferensi
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-navy/70 sm:text-base">
          {eventFacts.purpose.id}
        </p>
        <p className="mt-6 text-sm font-medium sm:text-base">
          {eventFacts.audience.id}
        </p>
        <p className="mt-1 text-sm text-navy/60">
          Diselenggarakan oleh {eventFacts.host}
        </p>
      </section>

      {/* 3. 핵심 프로그램과 날짜별 일정 미리보기 */}
      <section className="bg-navy px-6 py-16 text-ivory sm:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Program Acara
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {programDays.map((day) => (
              <li
                key={day.label}
                className="rounded-lg border border-ivory/15 px-3 py-4 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {day.label}
                </p>
                <p className="mt-1 text-sm">{day.date}</p>
                <p className="mt-2 text-xs text-ivory/60">{day.highlight}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/id/program"
              className="text-sm font-medium text-gold underline underline-offset-4"
            >
              Lihat Program Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 실제 기도원·예배 현장 사진 */}
      <section className="px-6 py-16 sm:px-10">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          Suasana Osanri Prayer Mountain
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
          {venuePhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-4/3 overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt.id}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. 참가비와 포함 항목 요약 */}
      <section className="bg-navy/5 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Biaya Pendaftaran
          </h2>
          <p className="mt-4 text-3xl font-bold text-brand-red sm:text-4xl">
            {eventFacts.fee.amount}
          </p>
          <p className="mt-4 text-sm text-navy/70 sm:text-base">
            [Rincian item yang termasuk dalam biaya pendaftaran akan segera
            dilengkapi.]
          </p>
        </div>
      </section>

      {/* 6. 해외 참가자 준비 안내 */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Persiapan untuk Peserta Luar Negeri
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy/70 sm:text-base">
            {eventFacts.transportInfo.id}
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-navy/5 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <ul className="mt-8 space-y-4">
            {faqItems.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-navy/10 bg-white px-5 py-4"
              >
                <p className="text-sm font-medium sm:text-base">{item.id}</p>
                <p className="mt-1 text-sm text-navy/60">
                  {item.answer ? item.answer.id : "[Jawaban akan segera dilengkapi]"}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link
              href="/id/faq"
              className="text-sm font-medium text-navy underline underline-offset-4"
            >
              Lihat semua FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* 8. 등록 또는 문의 버튼 */}
      <section className="bg-navy-deep px-6 py-16 text-center text-ivory sm:px-10">
        <h2 className="text-xl font-semibold sm:text-2xl">Siap Bergabung?</h2>
        <p className="mt-2 text-sm text-ivory/70 sm:text-base">
          Pendaftaran segera dibuka.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/id/registration"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold/90 sm:text-base"
          >
            Daftar Sekarang
          </Link>
          <a
            href={`mailto:${eventFacts.contactEmail}`}
            className="rounded-full border border-ivory/40 px-8 py-3 text-sm font-semibold transition-colors hover:bg-ivory/10 sm:text-base"
          >
            Hubungi Kami
          </a>
        </div>
        <p className="mt-6 text-xs text-ivory/50">{eventFacts.contactEmail}</p>
      </section>
    </main>
  );
}
