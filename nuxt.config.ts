// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

// Definisikan URL situs Anda di sini, agar mudah diakses di seluruh konfigurasi
// const SITE_URL = "https://www.gvanandita.com"; // GANTI DENGAN URL ASLI WEBSITE ANDA

export default defineNuxtConfig({
  app: {
    head: {
      title: "GV Anandita",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Solusi Pembiayaan Pensiun ASN, TNI, Polri.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/bg-logo.png",
        },
      ],
    },
  },
  css: [
    "@/assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/fontawesome.js", "~/plugins/aos.client.js"],

  // --- Penyesuaian konfigurasi @nuxtjs/seo ---
  modules: [
    [
      "@nuxtjs/seo",
      {
        site: {
          // Gunakan process.env.NUXT_PUBLIC_SITE_URL di sini
          url: process.env.NUXT_PUBLIC_SITE_URL || "https://www.gvanandita.com", // Fallback jika .env tidak ada
          name: "GV Anandita",
          description: "Solusi Pembiayaan Pensiun ASN, TNI, Polri.",
          defaultLocale: "id",
          identity: {
            type: "Organization",
            name: "GV Anandita",
            // Pastikan ini juga mengambil dari variabel lingkungan
            url:
              process.env.NUXT_PUBLIC_SITE_URL || "https://www.gvanandita.com",
          },
        },
        sitemap: {
          enabled: true,
          // Penting: Pastikan hostname juga mengambil dari variabel lingkungan
          hostname:
            process.env.NUXT_PUBLIC_SITE_URL || "https://www.gvanandita.com",
        },
        robots: {
          enabled: true,
          rules: [{ UserAgent: "*" }, { Allow: "/" }],
        },
      },
    ],
  ],

  // Ini sudah benar, pastikan tetap ada untuk konsistensi di runtime
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://www.gvanandita.com",
    },
  },
});
