import Layout from '@/components/app/layout/layout'
const GiftRoutes = [{
  path: '/gift',
  component: Layout,
  children: [{
    path: 'index',
    name: 'Gift',
    component: () => import('@/views/gift/index'),
    meta: {
      title: '礼物管理',
      icon: 'form',
      roles: ['admin']
    }
  }]
}]
export default GiftRoutes
