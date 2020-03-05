import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/routers'
Vue.use(Router)
export default new Router({
  mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
