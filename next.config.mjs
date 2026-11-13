/** @type {import('next').NextConfig} */
// BASE_PATH задається в GitHub Actions автоматично (/назва-репозиторію).
// Локально (npm run dev) він порожній, тож сайт відкривається на localhost:3000
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",          // статичний експорт у папку out/
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};
export default nextConfig;
