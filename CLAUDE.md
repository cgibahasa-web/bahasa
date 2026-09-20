@AGENTS.md


# 2027 CGI BAHASA Conference 웹사이트

- 스펙 원본: content-source/01-official-facts/세부계획.md, 실행계획.md (다른 imweb/PayPal 관련 문서는 폐기됨, 참고하지 말 것)
- 1차 목표(완료): 등록·결제 없는 안내 사이트 (ID 기본/EN 전환)
- 2차 단계(진행 중, 2026-09-21~): 등록·결제 흐름(참가권 선택→참가자 정보→주문 확인→결제) 구축. 결제는 PortOne(포트원)을 PG로 계약하고, 인도네시아 현지결제(GoPay/OVO 등)는 PortOne이 연동하는 Midtrans를 통해 처리한다 — "Midtrans만 사용"이 아니라 "PortOne 경유 Midtrans"가 정확한 구조. PayPal/imweb 언급 무시.
- 판매(등록) 개시일은 2027-01-01, 등록비는 USD $100 단일가(조기등록 할인 폐지). 실제 결제 연동용 PortOne 샌드박스/실키는 아직 없으므로, 결제 단계는 UI만 구축하고 실제 승인 호출은 비활성 상태로 둔다 (`src/lib/payment.ts`의 `isPaymentConfigured()`로 제어).
- 실제 개인정보(여권, 카드번호, 실명 참가자 정보)는 개발 중 절대 사용하지 않는다. 가상 데이터만 사용.
- 비밀키(PortOne/Midtrans Server Key 등)는 코드/커밋/대화에 남기지 않고 .env.local 에만 저장한다.
- 일정·금액·정책이 바뀌면 코드가 아니라 content-source의 원본 파일부터 고친다.
