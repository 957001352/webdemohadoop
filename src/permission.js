import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { autoRouter } from '@/router'
/* 路由模块 */
import demoRouter from './router/modules/module'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      // next({ path: '/' })
      next()
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      // 判断路由是否存在
      const routesFlag = store.getters.permission_routes && store.getters.permission_routes.length !== 0
      if (routesFlag) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          //await store.dispatch('user/getInfo')
          var newRouter = demoRouter
          let flag = false
          // const operationAuthority = localStorage.getItem('operationAuthority')
          // let routerLists = []
          // if (operationAuthority) {
          //   routerLists = operationAuthority.split(',')
          //   getRouterList(routerLists, newRouter)
          // }
          // let flag = true
          // for (let i = 0; i < routerLists.length; i++) {
          //   if (to.path === routerLists[i]) {
          //     flag = false
          //     break
          //   }
          // }
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', autoRouter.concat(newRouter))
          // dynamically add accessible routes
          // 解决addRoutes添加可能失效问题
          router.options.routes = accessRoutes
          router.addRoutes(accessRoutes)
          if (flag) {
            const url = newRouter[0].redirect
            // const roots = window.location.href.substring(0, window.location.href.indexOf('/#/'))
            // window.location.href = roots + url
            next({ path: url })
          } else {
            // hack method to ensure that addRoutes is complete
            // set the replace: true, so the navigation will not leave a history record
            next({ ...to, replace: true })
          }
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          store.state.permission.routes = []
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      store.state.permission.routes = []
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
// 过滤权限
// eslint-disable-next-line no-unused-vars
function getRouterList(list, applist) {
  for (let i = 0; i < applist.length; i++) {
    if (applist[i].children && applist[i].children.length > 0) {
      if (applist[i].children.length === 1) {
        if (list.indexOf(applist[i].children[0].meta.fullpath) < 0) {
          applist.splice(i, 1)
          i--
        }
      } else {
        getRouterList(list, applist[i].children)
      }
    } else {
      if (list.indexOf(applist[i].meta.fullpath) < 0) {
        applist.splice(i, 1)
        i--
      }
    }
  }
  for (let i = 0; i < applist.length; i++) {
    if (applist[i].children) {
      if (applist[i].children.length === 0) {
        applist.splice(i, 1)
        i--
      } else {
        applist[i].redirect = applist[i].children[0].meta.fullpath
      }
    }
  }
}
