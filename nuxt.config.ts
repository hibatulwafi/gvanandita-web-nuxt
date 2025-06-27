// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

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

  // --- Perubahan PENTING di sini ---
  modules: [
    ['@nuxtjs/seo', {
      site: {
        url: 'https://www.gvanandita.com', 
        name: 'GV Anandita',
        description: 'Solusi Pembiayaan Pensiun ASN, TNI, Polri.',
        defaultLocale: 'id',
        identity: {
          type: 'Organization',
          name: 'GV Anandita',
          url: 'https://www.gvanandita.com',
        }
      },
      sitemap: {
        enabled: true,
      },
      robots: {
        enabled: true,
        rules: [
          { UserAgent: '*' },
          { Allow: '/' },
        ],
      },
    }],
  ],
});