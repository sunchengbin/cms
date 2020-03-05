import Vue from 'vue'
import App from './app.vue'
import store from './store'
import SvgIcon from '@/components/common/svg_icon/svg'
import './plugins/element'
import router from './router'
import '@/permission'
// 组件
Vue.component(SvgIcon.name, SvgIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
