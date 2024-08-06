import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import VueMask from 'v-mask';

Vue.use(VueRouter);
Vue.use(VueMask);

const router = new VueRouter({
  mode: "history",
  scrollBehavior: async function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  
    const findEl = (hash, iterationSearchElement = 0) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve) => {
          if (iterationSearchElement > 50) {
            return resolve(document.querySelector('#app'))
          }
          setTimeout(() => {
            resolve(findEl(hash, ++iterationSearchElement || 1))
          }, 100)
        })
      )
    }
  
    if (to.hash) {
      const delay = to.path !== from.path ? 1000 : 400
      let el = await findEl(to.hash)
      if ('scrollBehavior' in document.documentElement.style) {
        setTimeout(async () => {
          if (!document.body.contains(el)) {
            el = await findEl(to.hash)
          }
          return window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
        }, delay)
      } else {
        setTimeout(() => {
          return window.scrollTo(0, el.offsetTop)
        }, delay)
      }
    }
  
    return to.path !== from.path && { x: 0, y: 0 }
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
