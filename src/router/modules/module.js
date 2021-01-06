/**
 * 看板路由
 */
import Layout from '@/layout'

const demoRouter = [
 {
    path: '/mouldRepair',
    component: Layout,
    name: 'Repair',
    meta: { title: '集团管理', icon: 'machinerepair', parentName: '模具管理' },
    redirect: '/mouldRepair/sysGroup',
    children: [
      {
        path: 'sysGroup',
        component: () => import('@/views/sys/sysGroup/sysGroup'),
        name: 'SysGroup',
        meta: { title: '集团管理', noCache: true, parentName: '模具管理', fullpath: '/mouldRepair/sysGroup' }
      },
      {
        path: 'sysBrand',
        component: () => import('@/views/sys/sysBrand/sysBrand'),
        name: 'SysBrand',
        meta: { title: '品牌管理', noCache: true, parentName: '模具管理', fullpath: '/mouldRepair/sysBrand' }
      },
      {
        path: 'sysRole',
        component: () => import('@/views/sys/sysRole/sysRole'),
        name: 'SysRole',
        meta: { title: '角色管理', noCache: true, parentName: '模具管理', fullpath: '/mouldRepair/sysRole' }
      }
    ]
  }
]
export default demoRouter
