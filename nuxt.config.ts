import { client } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/sass/_global.scss'
  ],
  plugins: [
    {src: '~/plugins/fontawesome.js', mode: "client"},
  ], 
  modules: [
    ['nuxt-purgecss', {  whitelistPatterns: [/svg.*/, /fa.*/] }],
  ] 
})



