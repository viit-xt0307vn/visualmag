// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/sass/_global.scss'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
  ], 
  modules: [
    ['nuxt-purgecss', {  whitelistPatterns: [/svg.*/, /fa.*/] }],
  ] 
})



