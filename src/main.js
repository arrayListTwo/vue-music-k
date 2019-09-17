import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import '@/common/stylus/index.styl'

// eslint-disable-next-line
// import vConsole from 'vconsole'
// eslint-disable-next-line
// var vConsoleObj = new vConsole()
// console.log('test')

// fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
