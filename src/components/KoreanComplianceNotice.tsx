import { eventFacts, organizer } from "@/content/event";

// The site's main content is Indonesian/English only. PortOne's onboarding
// review looks for Korean-language disclosure of terms/privacy/refund terms
// (the merchant is Korea-registered), so each legal page also carries this
// short Korean summary alongside the full ID/EN text.
type Page = "terms" | "privacy" | "refund";

export function KoreanComplianceNotice({ page }: { page: Page }) {
  return (
    <div className="rounded-lg border border-navy/15 bg-navy/5 px-4 py-4 text-sm leading-relaxed text-navy/80">
      <h2 className="text-base font-semibold text-navy">
        {page === "terms" && "이용약관 요약 (한국어)"}
        {page === "privacy" && "개인정보처리방침 요약 (한국어)"}
        {page === "refund" && "환불정책 요약 (한국어)"}
      </h2>

      {page === "terms" && (
        <>
          <p className="mt-2">
            본 약관은 {organizer.legalName.ko}({organizer.legalName.en}, 사업자
            등록번호 {organizer.registrationNumber})가 주최하는 &quot;
            {eventFacts.name}&quot;의 등록·참가에 적용됩니다. 참가비는{" "}
            {eventFacts.fee.amount}이며, 등록은 2027년 1월 1일부터 접수합니다.
          </p>
          <p className="mt-2">
            결제는 PortOne(포트원) 및 연동 결제수단(인도네시아 현지결제 포함
            Midtrans)을 통해 처리됩니다. 결제 완료 후에도 관련 법령에 따라
            정해진 기간 내 청약철회(취소)가 가능하며, 취소·환불의 기준과
            절차는 환불정책을 따릅니다.
          </p>
        </>
      )}

      {page === "privacy" && (
        <>
          <p className="mt-2">
            {organizer.legalName.ko}({organizer.legalName.en}, 사업자등록번호{" "}
            {organizer.registrationNumber})는 등록 신청 시 이름, 이메일,
            연락처, 거주 국가, 소속 등을 수집하며, 결제 처리를 위해 PortOne
            (및 인도네시아 현지결제 시 Midtrans)에 필요한 정보를 제공합니다.
          </p>
          <p className="mt-2">
            수집된 개인정보는 행사 종료 후 1년간 보관 후 파기합니다.
            개인정보 보호책임자: {organizer.dataProtectionOfficer}.
            열람·정정·삭제 요청은 아래 연락처로 문의해 주세요.
          </p>
        </>
      )}

      {page === "refund" && (
        <>
          <p className="mt-2">
            행사 1개월 전인 2027년 9월 11일(등록 마감일과 동일)까지 취소 신청
            시 결제 금액 전액을 환불하며, 이후 취소는 환불되지 않습니다.
            결제 완료 후에도 관련 법령에 따라 정해진 기간 내 청약철회(취소)를
            요청할 수 있습니다.
          </p>
          <p className="mt-2">
            환불 신청은 공식 이메일로 이름, 등록일, 결제 금액, 사유를 기재해
            접수하며, 승인 후 영업일 기준 14일 이내에 결제한 수단으로
            환불합니다. 행사가 연기되는 경우 등록은 새 일정으로 자동
            이월되며, 환불을 원하면 동일한 절차로 개별 신청할 수 있습니다.
          </p>
        </>
      )}

      <p className="mt-3 text-xs text-navy/50">
        문의: {organizer.email} · {organizer.phone}
      </p>
    </div>
  );
}
