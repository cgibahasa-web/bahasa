// PortOne (contracted PG) is not yet onboarded with live/sandbox credentials.
// Once PORTONE_STORE_ID and PORTONE_CHANNEL_KEY are added to .env.local
// (never commit real keys — see CLAUDE.md), this flag flips on and the
// payment step in the registration wizard can call the real PortOne SDK
// instead of showing the "coming soon" notice.
//
// Evaluated per-request (not cached at module load) since the Cloudflare
// Workers runtime this site deploys to (opennextjs-cloudflare) populates
// `process.env` from request-scoped bindings.
export function isPaymentConfigured(): boolean {
  return Boolean(process.env.PORTONE_STORE_ID && process.env.PORTONE_CHANNEL_KEY);
}
