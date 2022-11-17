// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr:false,
  css: [
    '@/assets/css/reset.scss',
    'material-icons/iconfont/material-icons.css',
  ],
  build:{
    transpile:['chart.js']
  },

  app: {
    head: {
      title:'페이오티 관리시스템',
      meta:[
        {charset:'utf-8'},
        {name:'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'}
      ],
      script: [],
    },
  },
})
