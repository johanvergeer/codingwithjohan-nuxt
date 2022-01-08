import Vue from 'vue'
import VueGtag from 'vue-gtag'
import { NuxtAppOptions } from '@nuxt/types/app'

export default ({ app }: { app: NuxtAppOptions }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-YXJQD5N1NZ' },
      appName: 'app-name',
    },
    app.router
  )
}
