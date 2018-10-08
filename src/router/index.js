import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/homepage'
        },
        {
         path: '/',
         name: '公共模块',
         component: home,
         children:[{
            path: '/homepage',
            name: '首页',
            component: resolve => require(['@/components/page/homepage'], resolve)
         },{
            path:'/life',
            name: '生活',
            component: resolve => require(['@/components/page/life'], resolve)
         },{
            path:'/share',
            name: '分享',
            component: resolve => require(['@/components/page/share'], resolve)
         },{
            path:'/sharedetails',
            name: '分享详情',
            component: resolve => require(['@/components/page/sharedetails'], resolve)
         },{
            path:'/aboutme',
            name: '关于我',
            component: resolve => require(['@/components/page/aboutme'], resolve)
         },{
            path:'/utility',
            name: '使用工具',
            component: resolve => require(['@/components/page/utility'], resolve)
         },{
            path:'/loading',
            name: '过程加载',
            component: resolve => require(['@/components/common/loading'], resolve)
         }] 
      }
    ]
})