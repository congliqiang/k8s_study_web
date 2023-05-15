import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'              the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
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
    redirect: '/pod/list'
  },
  {
    path: '/node',
    component: Layout,
    redirect: '/node/nodes',
    name: 'Node',
    meta: {title: '节点管理', icon: 'pod'},
    children: [
      {
        path: 'list',
        name: 'NodeList',
        component: () => import('@/views/node/index'),
        meta: {title: '节点列表', icon: 'node'}
      },
      {
        path: 'edit',
        name: 'Node',
        component: () => import('@/views/node/edit'),
        meta: {title: "编辑节点", icon: 'node', activeMenu: "/node/list"},
        hidden: true
      }
    ]
  },
  {
    path: '/pod',
    component: Layout,
    redirect: '/pod/pods',
    name: 'Pod',
    meta: {title: 'Pod管理', icon: 'workload'},
    children: [
      {
        path: 'list',
        name: 'PodList',
        component: () => import('@/views/pod/index'),
        meta: {title: "Pod列表", icon: 'workload'}
      },
      {
        path: 'create',
        name: 'Pod',
        component: () => import('@/views/pod/create'),
        meta: {title: '更新Pod', icon: 'workload', activeMenu: "/pod/list"},
        hidden: true
      }
    ]
  },
  {
    path: '/volume',
    component: Layout,
    redirect: '/volume/configmaps',
    name: 'ConfigMap',
    meta: {title: '存储卷管理', icon: 'data'},
    children: [
      {
        path: 'configmaps',
        name: 'ConfigMaps',
        component: () => import('@/views/configmap/index'),
        meta: {title: 'ConfigMap', icon: 'cm', activeMenu: "/volume/configmaps"}
      },
      {
        path: 'configmap-edit',
        name: 'ConfigMapEdit',
        component: () => import('@/views/configmap/edit'),
        meta: {title: 'ConfigMap', icon: 'cm', activeMenu: "/volume/configmaps"},
        hidden: true,
      },
      {
        path: 'secrets',
        name: 'Secrets',
        component: () => import('@/views/secret/index'),
        meta: {title: 'Secret', icon: 'secret', activeMenu: "/volume/secrets"}
      },
      {
        path: 'secret-edit',
        name: 'SecretEdit',
        component: () => import('@/views/secret/edit'),
        meta: {title: 'Secret', icon: 'secret', activeMenu: "/volume/secrets"},
        hidden: true,
      },
      {
        path: 'pvs',
        name: 'PersistentVolume',
        component: () => import('@/views/pv/index'),
        meta: {title: 'PersistentVolume', icon: 'pv', activeMenu: "/volume/pvs"}
      },
      {
        path: 'pv-edit',
        name: 'PVEdit',
        component: () => import('@/views/pv/edit'),
        meta: {title: '编辑PV', icon: 'pv', activeMenu: "/volume/pvs"},
        hidden: true,
      },
      {
        path: 'pvcs',
        name: 'PersistentVolumeClaim',
        component: () => import('@/views/pvc/index'),
        meta: {title: 'PersistentVolumeClaim', icon: 'pvc', activeMenu: "/volume/pvcs"}
      },
      {
        path: 'pvc-edit',
        name: 'PVCEdit',
        component: () => import('@/views/pvc/edit'),
        meta: {title: '编辑PVC', icon: 'pvc', activeMenu: "/volume/pvcs"},
        hidden: true,
      },
      {
        path: 'scs',
        name: 'StorageClass',
        component: () => import('@/views/sc/index'),
        meta: {title: 'StorageClass', icon: 'sc', activeMenu: "/volume/scs"}
      },
      {
        path: 'sc-edit',
        name: 'SCEdit',
        component: () => import('@/views/sc/edit'),
        meta: {title: '编辑SC', icon: 'pvc', activeMenu: "/volume/scs"},
        hidden: true,
      },
    ]
  },
  {
    path: '/discovery',
    component: Layout,
    redirect: '/discovery/services',
    name: 'Discovery',
    meta: {title: '服务发现', icon: 'discovery'},
    children: [
      {
        path: 'services',
        name: 'Services',
        component: () => import('@/views/svc/index'),
        meta: {title: 'Service', icon: 'svc', activeMenu: "/discovery/services"}
      },
      {
        path: 'service-edit',
        name: 'Services',
        component: () => import('@/views/svc/edit'),
        meta: {title: 'Service', icon: 'svc', activeMenu: "/discovery/services"},
        hidden: true
      },
      {
        path: 'ingresses',
        name: 'Ingress',
        component: () => import('@/views/ingress/index'),
        meta: {title: 'Ingress', icon: 'ingress', activeMenu: "/discovery/ingresses"}
      },
      {
        path: 'ingress-edit',
        name: 'Ingress',
        component: () => import('@/views/ingress/edit'),
        meta: {title: 'Ingress', icon: 'ingress', activeMenu: "/discovery/ingresses"},
        hidden: true
      },
      {
        path: 'ingroutes',
        name: 'IngRoute',
        component: () => import('@/views/ingroute/index'),
        meta: {title: 'IngressRoute', icon: 'ingroute', activeMenu: "/discovery/ingroutes"}
      },
      {
        path: 'ingroute-edit',
        name: 'IngRoute',
        component: () => import('@/views/ingroute/edit'),
        meta: {title: 'IngressRoute', icon: 'ingroute', activeMenu: "/discovery/ingroutes"},
        hidden: true
      },
    ]
  },
  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require svc support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
