import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Pin the workspace root to this folder so Next doesn't infer the parent
  // directory when multiple lockfiles are present (this app deploys on its own).
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Legacy WordPress URLs → new Next.js routes
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/book-my-appointment", destination: "/contact/", permanent: true },
      { source: "/free-consultation", destination: "/contact/", permanent: true },
      { source: "/prices", destination: "/pricing/", permanent: true },
      { source: "/receding-hairline-restoration", destination: "/receding-hairline/", permanent: true },
      { source: "/alopecia-hair-loss", destination: "/alopecia/", permanent: true },
      { source: "/locations", destination: "/areas-we-serve/", permanent: true },
      { source: "/terms-of-service", destination: "/terms/", permanent: true },
    ];
  },
};

export default nextConfig;
