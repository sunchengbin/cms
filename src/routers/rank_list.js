import Layout from '@/components/app/layout/layout'
const RankListRoutes = [{
  path: '/rank_list',
  component: Layout,
  redirect: '/rank_list/list',
  name: 'RankList',
  meta: {
    title: '歌曲榜单',
    icon: 'example'
  },
  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('@/views/rank_list/index'),
      meta: {
        title: '榜单列表',
        icon: 'eye',
        roles: ['admin']
      }
    },
    {
      path: 'rank/:id',
      name: 'rank',
      component: () => import('@/views/rank_list/rank'),
      meta: {
        title: '榜单详情',
        icon: 'table',
        roles: ['admin']
      }
    }
  ]
}]
export default RankListRoutes
