// 首页和帮助提示页面
import Layout from '@/components/app/layout/layout'

const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/index/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/index/home')
    }]
  }
]
export {
  constantRouterMap
}
