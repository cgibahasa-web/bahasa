"use client";

import { useState } from "react";
import Link from "next/link";
import {
  eventFacts,
  feeExclusions,
  feeInclusions,
  organizer,
} from "@/content/event";
import { localePath } from "@/lib/locale";

type Locale = "id" | "en";
type RegistrationType = "individual" | "group";

type ParticipantInfo = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  church: string;
};

const emptyInfo: ParticipantInfo = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  church: "",
};

export function RegistrationWizard({
  locale,
  paymentConfigured,
}: {
  locale: Locale;
  paymentConfigured: boolean;
}) {
  const t = <T,>(id: T, en: T) => (locale === "id" ? id : en);
  const [step, setStep] = useState(0);
  const [registrationType, setRegistrationType] =
    useState<RegistrationType>("individual");
  const [info, setInfo] = useState<ParticipantInfo>(emptyInfo);
  const [groupSize, setGroupSize] = useState<number>(
    eventFacts.groupRegistration.minSize,
  );
  const [memberNames, setMemberNames] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isGroup = registrationType === "group";
  const memberNameList = memberNames
    .split("\n")
    .map((name) => name.trim())
    .filter(Boolean);
  const headcount = isGroup ? groupSize : 1;
  const totalUsd = headcount * eventFacts.fee.amountUsd;

  const stepLabels = t(
    ["Jenis Pendaftaran", "Data Peserta", "Ringkasan Pesanan", "Pembayaran"],
    ["Registration Type", "Participant Details", "Order Summary", "Payment"],
  );

  const baseInfoComplete =
    info.fullName.trim() !== "" &&
    /\S+@\S+\.\S+/.test(info.email) &&
    info.phone.trim() !== "" &&
    info.country.trim() !== "";

  const groupInfoComplete =
    info.church.trim() !== "" &&
    groupSize >= eventFacts.groupRegistration.minSize &&
    memberNameList.length >= groupSize;

  const infoComplete =
    baseInfoComplete && (!isGroup || groupInfoComplete);

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10">
      <ol className="mb-10 flex items-center justify-between gap-2 text-xs font-medium text-navy/50 sm:text-sm">
        {stepLabels.map((label, i) => (
          <li
            key={label}
            className={`flex-1 border-t-2 pt-2 text-center ${
              i <= step ? "border-gold text-navy" : "border-navy/15"
            }`}
          >
            {i + 1}. {label}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <section>
          <h2 className="text-lg font-semibold text-navy sm:text-xl">
            {t("Pilih Jenis Pendaftaran", "Select Registration Type")}
          </h2>

          <div className="mt-4 space-y-3">
            <label
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-5 ${
                !isGroup
                  ? "border-gold/50 bg-gold/5"
                  : "border-navy/15 hover:bg-navy/5"
              }`}
            >
              <input
                type="radio"
                name="registrationType"
                checked={!isGroup}
                onChange={() => setRegistrationType("individual")}
                className="mt-1.5"
              />
              <div className="flex-1">
                <p className="font-semibold text-navy">
                  {t("Peserta Individu", "Individual Participant")}
                </p>
                <p className="mt-1 text-2xl font-bold text-brand-red">
                  {eventFacts.fee.amount}
                </p>
                <p className="mt-1 text-xs text-navy/50">
                  {eventFacts.fee.allInclusiveNote[locale]}
                </p>
              </div>
            </label>

            <label
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-5 ${
                isGroup
                  ? "border-gold/50 bg-gold/5"
                  : "border-navy/15 hover:bg-navy/5"
              }`}
            >
              <input
                type="radio"
                name="registrationType"
                checked={isGroup}
                onChange={() => setRegistrationType("group")}
                className="mt-1.5"
              />
              <div className="flex-1">
                <p className="font-semibold text-navy">
                  {t(
                    `Peserta Kelompok (minimal ${eventFacts.groupRegistration.minSize} orang)`,
                    `Group Participants (minimum ${eventFacts.groupRegistration.minSize} people)`,
                  )}
                </p>
                <p className="mt-1 text-2xl font-bold text-brand-red">
                  {eventFacts.fee.amount}{" "}
                  <span className="text-sm font-normal text-navy/50">
                    {t("/ orang", "/ person")}
                  </span>
                </p>
                <p className="mt-1 text-xs text-navy/50">
                  {eventFacts.groupRegistration.note[locale]}
                </p>
              </div>
            </label>
          </div>

          <div className="mt-6 grid gap-4 text-left text-sm text-navy/70 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                {t("Termasuk", "Included")}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {feeInclusions.map((item) => (
                  <li key={item.id}>{item[locale]}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                {t("Tidak Termasuk", "Not Included")}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {feeExclusions.map((item) => (
                  <li key={item.id}>{item[locale]}</li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-6 w-full rounded-full bg-navy px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-navy/90 sm:text-base"
          >
            {t("Lanjutkan", "Continue")}
          </button>
        </section>
      )}

      {step === 1 && (
        <section>
          <h2 className="text-lg font-semibold text-navy sm:text-xl">
            {isGroup
              ? t("Data Kelompok & Kontak", "Group & Contact Details")
              : t("Data Peserta", "Participant Details")}
          </h2>
          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (infoComplete) setStep(2);
            }}
          >
            {isGroup && (
              <p className="rounded-md border border-navy/10 bg-navy/5 px-3 py-2 text-xs text-navy/60">
                {t(
                  "Isi data di bawah sebagai kontak/penanggung jawab pendaftaran kelompok.",
                  "Fill in the details below as the contact person responsible for the group registration.",
                )}
              </p>
            )}
            <Field
              label={t("Nama Lengkap", "Full Name")}
              value={info.fullName}
              onChange={(v) => setInfo((prev) => ({ ...prev, fullName: v }))}
              required
            />
            <Field
              label="Email"
              type="email"
              value={info.email}
              onChange={(v) => setInfo((prev) => ({ ...prev, email: v }))}
              required
            />
            <Field
              label={t("No. Telepon / WhatsApp", "Phone / WhatsApp Number")}
              value={info.phone}
              onChange={(v) => setInfo((prev) => ({ ...prev, phone: v }))}
              required
            />
            <Field
              label={t("Negara Domisili", "Country of Residence")}
              value={info.country}
              onChange={(v) => setInfo((prev) => ({ ...prev, country: v }))}
              required
            />

            {isGroup ? (
              <>
                <Field
                  label={t(
                    "Nama Kelompok / Gereja",
                    "Group / Church Name",
                  )}
                  value={info.church}
                  onChange={(v) =>
                    setInfo((prev) => ({ ...prev, church: v }))
                  }
                  required
                />
                <label className="block text-sm text-navy/80">
                  <span className="font-medium">
                    {t("Jumlah Peserta *", "Number of Participants *")}
                  </span>
                  <input
                    type="number"
                    min={eventFacts.groupRegistration.minSize}
                    value={groupSize}
                    onChange={(e) =>
                      setGroupSize(
                        Math.max(0, parseInt(e.target.value, 10) || 0),
                      )
                    }
                    className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm text-navy focus:border-gold focus:outline-none"
                  />
                  <span className="mt-1 block text-xs text-navy/50">
                    {t(
                      `Minimal ${eventFacts.groupRegistration.minSize} orang`,
                      `Minimum ${eventFacts.groupRegistration.minSize} people`,
                    )}
                  </span>
                </label>
                <label className="block text-sm text-navy/80">
                  <span className="font-medium">
                    {t(
                      "Daftar Nama Peserta Kelompok *",
                      "Group Participant Name List *",
                    )}
                  </span>
                  <textarea
                    value={memberNames}
                    onChange={(e) => setMemberNames(e.target.value)}
                    rows={6}
                    placeholder={t(
                      "Satu nama per baris",
                      "One name per line",
                    )}
                    className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm text-navy focus:border-gold focus:outline-none"
                  />
                  <span className="mt-1 block text-xs text-navy/50">
                    {t(
                      `${memberNameList.length} dari ${groupSize} nama dimasukkan`,
                      `${memberNameList.length} of ${groupSize} names entered`,
                    )}
                  </span>
                </label>
              </>
            ) : (
              <Field
                label={t(
                  "Gereja / Lembaga (opsional)",
                  "Church / Organization (optional)",
                )}
                value={info.church}
                onChange={(v) =>
                  setInfo((prev) => ({ ...prev, church: v }))
                }
              />
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="flex-1 rounded-full border border-navy/20 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5 sm:text-base"
              >
                {t("Kembali", "Back")}
              </button>
              <button
                type="submit"
                disabled={!infoComplete}
                className="flex-1 rounded-full bg-navy px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
              >
                {t("Lanjutkan", "Continue")}
              </button>
            </div>
          </form>
        </section>
      )}

      {step === 2 && (
        <section>
          <h2 className="text-lg font-semibold text-navy sm:text-xl">
            {t("Ringkasan Pesanan", "Order Summary")}
          </h2>
          <dl className="mt-4 space-y-2 rounded-lg border border-navy/10 bg-navy/5 p-5 text-sm text-navy/80">
            <Row
              label={t("Jenis Pendaftaran", "Registration Type")}
              value={
                isGroup
                  ? t("Kelompok", "Group")
                  : t("Individu", "Individual")
              }
            />
            <Row label={t("Nama Kontak", "Contact Name")} value={info.fullName} />
            <Row label="Email" value={info.email} />
            <Row label={t("Telepon", "Phone")} value={info.phone} />
            <Row label={t("Negara", "Country")} value={info.country} />
            {isGroup ? (
              <>
                <Row
                  label={t("Nama Kelompok/Gereja", "Group/Church Name")}
                  value={info.church}
                />
                <Row
                  label={t("Jumlah Peserta", "Number of Participants")}
                  value={String(groupSize)}
                />
              </>
            ) : (
              info.church && (
                <Row
                  label={t("Gereja/Lembaga", "Church/Organization")}
                  value={info.church}
                />
              )
            )}
          </dl>

          {isGroup && (
            <div className="mt-4 rounded-lg border border-navy/10 bg-navy/5 p-5 text-sm text-navy/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                {t("Daftar Nama Peserta", "Participant Name List")}
              </p>
              <ul className="mt-2 list-decimal space-y-0.5 pl-5">
                {memberNameList.map((name, i) => (
                  <li key={`${name}-${i}`}>{name}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between rounded-lg border border-gold/50 bg-gold/5 px-5 py-4">
            <span className="font-semibold text-navy">
              {t("Total Pembayaran", "Total Amount")}
              {isGroup && (
                <span className="block text-xs font-normal text-navy/50">
                  {t(
                    `${groupSize} orang × ${eventFacts.fee.amount}`,
                    `${groupSize} people × ${eventFacts.fee.amount}`,
                  )}
                </span>
              )}
            </span>
            <span className="text-xl font-bold text-brand-red">
              USD ${totalUsd}
            </span>
          </div>
          <p className="mt-2 text-xs text-navy/50">
            {eventFacts.currencyNote[locale]}
          </p>

          <label className="mt-6 flex items-start gap-2 text-sm text-navy/70">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1"
            />
            <span>
              {t("Saya menyetujui ", "I agree to the ")}
              <Link
                href={localePath(locale, "/terms")}
                className="underline underline-offset-4"
              >
                {t("Syarat & Ketentuan", "Terms & Conditions")}
              </Link>
              {t(" dan ", " and ")}
              <Link
                href={localePath(locale, "/refund")}
                className="underline underline-offset-4"
              >
                {t("Kebijakan Pengembalian Dana", "Refund Policy")}
              </Link>
              .
            </span>
          </label>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 rounded-full border border-navy/20 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5 sm:text-base"
            >
              {t("Kembali", "Back")}
            </button>
            <button
              type="button"
              disabled={!agreed}
              onClick={() => setStep(3)}
              className="flex-1 rounded-full bg-navy px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
            >
              {t("Lanjutkan ke Pembayaran", "Continue to Payment")}
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="text-center">
          <h2 className="text-lg font-semibold text-navy sm:text-xl">
            {t("Pembayaran", "Payment")}
          </h2>

          <p className="mt-4 text-sm text-navy/70">
            {t("Total: ", "Total: ")}
            <span className="font-bold text-brand-red">USD ${totalUsd}</span>
          </p>

          {paymentConfigured ? (
            <p className="mt-4 text-sm text-navy/70">
              {t(
                "Sistem pembayaran akan segera muncul di sini.",
                "The payment widget will appear here.",
              )}
            </p>
          ) : (
            <div className="mt-4 rounded-lg border border-navy/10 bg-navy/5 p-6 text-left text-sm text-navy/70">
              <p>
                {t(
                  "Integrasi sistem pembayaran belum aktif — masih menunggu persetujuan PG.",
                  "Payment system integration is not yet active — it is still pending PG approval.",
                )}
              </p>
              <p className="mt-2">{eventFacts.paymentProviderNote[locale]}</p>
              <p className="mt-4">
                {t(
                  "Untuk mendaftar sebelum sistem pembayaran aktif, silakan hubungi ",
                  "To register before the payment system is active, please contact ",
                )}
                <a
                  href={`mailto:${organizer.email}`}
                  className="underline underline-offset-4"
                >
                  {organizer.email}
                </a>
                {t(" dengan data di atas.", " with the details above.")}
              </p>
            </div>
          )}

          <p className="mt-4 text-xs text-navy/50">
            {eventFacts.postPaymentInfo[locale]}
          </p>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-6 rounded-full border border-navy/20 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5 sm:text-base"
          >
            {t("Kembali", "Back")}
          </button>
        </section>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-navy/80">
      <span className="font-medium">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm text-navy focus:border-gold focus:outline-none"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-navy/50">{label}</dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  );
}
