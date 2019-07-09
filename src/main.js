import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 加载页面
import IndexPage from '@/pages/Index.vue'
import Page1 from '@/pages/Page1.vue'
import Page2 from '@/pages/Page2.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: IndexPage },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
]

const router = new VueRouter({
    routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
