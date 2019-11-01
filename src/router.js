import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import ScrollTap from '@/components/ScrollTap.vue'
import Common from '@/components/Common.vue'

Vue.use(Router)
// 注册全局组件
Vue.component("common", Common)
const vueRouter = new Router({
  //配置路由模式(URL跳转,无须重新加载页面)去掉地址栏中的#键
  // mode: 'history',
  //应用的基路径 例如,如果整个单页应用服务在/app/下,然后 base 就应该设为“/app/”
  // base: '/app/',
  //当浏览器不支持 history.pushState,控制路由是否应该回退到hash模式
  fallback: true,
  // mode: 'history',
  routes: [{
      // 一级路由(/[根路由==项目运行时第一个显示的组件])
      path: '/',
      name: 'index',
      // 懒加载路由 按需加载(页面需要跳转到这个路由时候进行加载)
      component: () => import('./components/index.vue'),
      // alias 别名(设置别名，可以让你访问 ‘/about’的时候渲染 path 为 ‘/’ 的组件)
      // alias: '/about'
      // 组件独享路由(beforeEnter),只作用于调用组件的内部
      // beforeEnter: (to,from,next) => {
      //   alert("非登录状态，不能访问此页面！")
      //   next('/scrollTap')
      // }
      // props: (route) => { // 静态、路由 prop 都可配置
      //   console.log(route.params.username);
      //   return {
      //     face: 'show',
      //     username: route.params.username
      //   };
      // }
      //  meta: {
      //    keepAlive: true // 组件是否需要被缓存
      //  }
      // 二级路由
      children: [{
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue'),
        },
        {
          path: '/Home',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: '/scrollTap',
          name: 'scrollTap',
          component: () => import('./views/ScrollTap.vue'),
          // 三级路由
          // children: [{}],
        },
      ]
    },
    // 一级路由(如果业务需求要重新打开一个全新的页面, 将路由机制设置成一级路由即可)
    {
      path: '/Classification',
      name: 'classification',
      component: () => import('./components/shopping/Classification.vue'),
    },
    {
      path: '/ShoppingCart',
      name: 'shoppingCart',
      component: () => import('./components/shopping/ShoppingCart.vue'),
    }
  ],
})  
// (路由前守卫)跳转之前判断用户是否登录,没登录跳转到登录页面,登录了则进入app内
// 回调函数中的参数,to:进入到哪个路由去,from:从哪个路由离开,next函数,决定是否展示你要看到的路由页面
// 用户在未登录状态下,展示的一直是登录界面
// vueRouter.beforeEach((to, from, next) => {
//   if (to.path == '/' || to.path == '/about' || to.path == '/scrollTap' || to.path == '/Car') {
//     next();
//   } else {
//     alert('您还没有登录，请先登录');
//     next('/login');
//   }
// })
// (路由后守卫)每次切换路由都会执行vueRouter.afterEach()
vueRouter.afterEach((to, from) => {
  // alert("切换路由了！");
  // 如果直接重载页面用户体验会不好，选择使用beforeRouteEnter和beforeRouteUpdate配合使用
  // window.location.reload();
})
// 暴露出路由(在其它页面能匹配进路由规则中) 在main.js中注册声明使用固定写法 import router from './router'
export default vueRouter;