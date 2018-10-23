// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import api from "./api"
import VeeValidate,{ Validator } from 'vee-validate'
import zh_CN from '../static/js/zh_CN' //引入中文包，提示信息可以以中文形式显示
import $ from 'jquery'
import store from './store'
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

Validator.addLocale(zh_CN); // 设置提示信息中文方式显示

const dictionary = {
   zh_CN: {
      messages: {
        required: () => '不能为空哦',
        email:() => '请输入正确的邮箱格式',
        c_ontent:'留言不能为空'
      },
      attributes:{
        a_uthor:'用户名',
        email:'邮箱',
        mobile:'手机号',
        c_ontent:'留言'
      }
  }
};

// const isMobile = {
//     messages: {
//         zh_CN:(field, args) => field + '必须是11位手机号码',
//     },
//     validate: (value, args) => {
//        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//     }
// }
// Validator.extend('mobile', isMobile);
Validator.updateDictionary(dictionary);
const config = {
  errorBagName: 'errors', 
  fieldsBagName: 'fields',
  delay: 100,   
  locale: 'zh_CN', 
  strict: true,  
  enableAutoClasses: true,
  events: 'blur', 
  inject: true
};

Vue.use(VeeValidate, config); //一般插件都要use一下
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$ajax = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
