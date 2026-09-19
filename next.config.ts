import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// Enables `next dev` to access Cloudflare bindings (R2, Images, ...) via
// getCloudflareContext(), matching what the deployed Worker sees.
// https://opennext.js.org/cloudflare/get-started
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
