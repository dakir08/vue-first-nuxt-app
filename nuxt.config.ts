// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "/<rootDir>",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    catApiBaseUrl: process.env.CAT_API_BASE_URL,
    public: {
      catApiBaseUrl: process.env.CAT_API_BASE_URL,
    },
  },
});
