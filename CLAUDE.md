@AGENTS.md


# 2027 CGI BAHASA Conference 웹사이트

- 스펙 원본: content-source/01-official-facts/세부계획.md, 실행계획.md (다른 imweb/PayPal 관련 문서는 폐기됨, 참고하지 말 것)
- 1차 목표: 등록·결제 없는 안내 사이트 (ID 기본/EN 전환)
- 결제는 2차 단계에서 Midtrans만 사용. PayPal/imweb 언급 무시.
- 실제 개인정보(여권, 카드번호, 실명 참가자 정보)는 개발 중 절대 사용하지 않는다. 가상 데이터만 사용.
- 비밀키(Midtrans Server Key 등)는 코드/커밋/대화에 남기지 않고 .env.local 에만 저장한다.
- 일정·금액·정책이 바뀌면 코드가 아니라 content-source의 원본 파일부터 고친다.
