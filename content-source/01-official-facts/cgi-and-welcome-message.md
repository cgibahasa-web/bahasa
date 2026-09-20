# About 페이지 — CGI 소개 & 환영사 출처/상태

작성일: 2026-09-21

## CGI 소개 (`cgiIntro` in src/content/event.ts)

출처: https://cgikorea.kr (2026-09-21 조회)

- Church Growth International(CGI, 국제교회성장연구원)은 1976년 설립
- 설립자: 故 David Yonggi Cho(조용기) 박사 — 성령 사역·건강한 교회 성장·세계 선교에 헌신
- 주요 활동: 연례 국제 컨퍼런스, 과거 컨퍼런스 자료 아카이빙, 교회성장 관련 잡지 발행
- 현재 의장: 이영훈 박사 (여의도순복음교회 담임목사)
- 참고: CGI 50주년 기념 컨퍼런스가 2026년 10월 28~31일 서울에서 예정되어 있음(이 사이트가
  다루는 2027 CGI BAHASA Conference와는 별개 행사)

## 환영사 (`welcomeMessage` in src/content/event.ts) — ⚠️ 초안, 미승인

이영훈 목사님 명의로 게시할 환영사이므로, **실제로 목사님/CGI 측이 검토·승인하기 전에는
초안임을 명시**하거나 확정 문구로 교체해야 한다. 현재 문구는 Claude가
`eventFacts.purpose`(행사 목적)를 풀어서 초안 작성한 것이며, 실제로 목사님이 하신 말씀이
아니다. 승인 또는 실제 원고를 받으면 이 문서와 `src/content/event.ts`의 값을 함께 교체할 것.

## 사진 (`welcomeMessageAuthor.photo`) — 완료 (2026-09-21)

사용자가 직접 제공한 사진 파일을 `public/images/about/lee-young-hoon.png`에 저장하고
`src/content/event.ts`의 `welcomeMessageAuthor.photo` 경로를 갱신함(.jpg → .png, 원본
파일 형식에 맞춤).
