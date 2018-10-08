<template>
<div :class="headCoverSilde?'slide':''">
    <vNavigation></vNavigation>
    <div class="headCover">
        <div class="introduce-title">
            <h1>关于我</h1>
            <p class="subline" style="margin-bottom: 600px;">和我的简历</p>
        </div>
        <div id="view-Body" class="view-Body view-body-main">
            <div class="main-wrap">
                <div style="" class="content">
                    <div class="name-con clearfix">
                        <div class="name-left">
                            <div class="name">沈鑫荣</div>
                            <div class="word">热爱互联网前端开发，已积累一定数量中小型项目开发经验。</div>
                            <div class="introduce">24岁<span>|</span>浙江杭州<span>|</span>3年工作经验<span>|</span>15695715173<span>|</span>913839175@qq.com</div>
                        </div>
                        <div class="name-right">
                            <img src="static/images/aboutme/shenxinrong.jpg" class="nameimg">
                        </div>
                    </div>
                    <div class="name-con2 clearfix">
                        <div class="m-table">
                             <h3 class="m-title"><span>专业技能</span></h3>

                            <div class="m-content">
                                <ul class="m-list">
                                    <li>1、熟悉掌握CSS+DIV网页布局,以及标准的(JavaScript/ES6、HTML5、CSS3)；</li>
                                    <li>2、熟悉使用面向对象javascript编程手写js和部分插件；</li>
                                    <li>3、熟练PHP后台语言,配合数据库进行后台的开发；</li>
                                    <li>4、熟练使用Git、Gulp、Webpack等前端自动化相关的工具打包；</li>
                                    <li>5、熟悉模块化概念,有seajs方面使用的项目经验；</li>
                                    <li>6、熟悉mvvm模式，用vuejs+elementui+vuex开发过后台管理系统以及前台页面的经验</li>
                                    <li>7、熟悉小程序API,写过相关DOM和页面。</li>
                                </ul>
                            </div>
                        </div>
                        <div class="m-table">
                             <h3 class="m-title"><span>工作经历</span></h3>

                            <div class="m-content">
                                <ul class="m-list">
                                    <li class="list-timeline"></li>
                                    <li class="list-title">2015年9月-2016年6月</li>
                                    <li class="list-desc font500">杭州博彦科技信息技术有眼公司 | WEB前端开发</li>
                                    <li class="list-desc">行业类别：电子商务 | 企业性质：外包服务 | 规模：500-999人 | 职位月薪：保密</li>
                                    <li class="list-desc">工作描述：前期负责阿里外包活动页面前端开发，主要包括淘宝天猫基本页面结构布局，使用kissy框架进行ajax前后端交互，各种逻辑的js交互的实现；
                                        <br>手淘活动页面的前端开发，主要包括页面的布局、交互以及各种css3动画特效的实现。</li>
                                    <li class="list-desc">后期参与视界plus微信端页面的前端开发，调用微信服务号jsapi实现相关互动以及协助前端团队封装js常用组件。</li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-timeline"></li>
                                    <li class="list-title">2016年6月-至今</li>
                                    <li class="list-desc font500">上海佩辉金融信息服务有限公司 | WEB前端开发</li>
                                    <li class="list-desc">行业类别：基金/证券/期货/投资 | 企业性质：有限责任公司 | 规模：100-499人 | 职位月薪：保密</li>
                                    <li class="list-desc">工作描述：
                                        <p>1、参与公司金融产品的前端开发工作（CSS+DIV）；</p>
                                        <p></p>
                                        <p>2、负责部分后台管理系统，用vue+elementui+vuex</p>
                                        <p></p>
                                        <p>3、参与公司官网页面H5的版本。</p>
                                        <p></p>
                                        <p>3、用jsp把php版本的前端页面改版,前后分离的模式，后台负责接口，前台负责数据的调用和页面的渲染和维护。</p>
                                        <p></p>
                                        <p>4、负责日常活动的H5小游戏，编写简单的H5游戏和jssdk的调用，和后台数据的交互</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="m-table">
                             <h3 class="m-title"><span>项目经验</span></h3>
                            <div class="m-content">
                                <ul class="m-list">
                                    <!-- <li class="list-timeline"></li>
                                        <li class="list-title font500">2016手淘双11项目-天猫集结令(站队)</li>
                                        <li class="list-desc">用到的技术：手淘lib相关库、mtop相关接口的调用、原生js、HybridAPI</li>
                                        <li class="list-desc">简介：通过淘宝、天猫客户端活动会场入口，引导用户进入页面参加活动，创建战队，通过微信，钉钉等通道分享造势期人拉人站队，当本战队所有人双11成交额累加达到某个门槛，即可在11月1日瓜分该门槛所对应的大额红包。</li>
                                        <li class="list-title font500">设计芭</li>
                                        <li class="list-desc">用到的技术：Ajax、Gulp、Php、Mysql、Less、Seajs、Jquery、artTemplate</li>
                                        <li class="list-desc">项目描述：本项目用了Fullpage全屏滚动插件，主要使用户了解公司人员信息情况、展示公司的一些作品案例、以及公司的最近新闻资讯，让用户更加了解到公司的发展。该项目前端部分页面采用了SeaJS，后端使用PHP，利用了Sublime及JSlint插件、git、gulp、artTemplate、less等工具。</li>
                                        <li class="list-desc">demo地址：<a href="http://yunplus.com.cn/" target="_blank">http://yunplus.com.cn/</a>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="m-table">
                             <h3 class="m-title"><span>个人评价</span></h3>

                            <div class="m-content">
                                <p>深度互联网从业人员，对互联网保持高度的敏感性和关注度，熟悉产品开发流程，有很强的开发能力，能独立承担WEB项目的管控工作。</p>
                                <p>我正在寻找一个更好的发展平台，希望能够充分发挥自己的优势，共同努力成就一番事业。</p>
                                <br>个人博客主页：
                                <a href="" target="_blank"></a>
                                <br>Coding git项目主页：
                                <a href="" target="_blank"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <vBread></vBread>
        </div>
    </div>
    <div class="head-arrow-down"> <a href="javascript:scroll(0,1)"><i aria-hidden="true" class="animate-movedown fa fa-angle-double-down"></i><br><p>下拉获取更多</p></a>
    </div>
</div>
</template>
<style scoped>
@import '../../../static/css/aboutme.css';    
</style>
<script>
import vBread from '@/components/common/bread.vue';
import vNavigation from '@/components/common/navigation.vue';
export default {
  name: 'aboutme',
  data () {
    return {
      headCoverSilde:false,
    }
  },
  created() {
    var _this = this;
  },
  mounted () {
     var _this = this;
      window.addEventListener('scroll', this.handleScroll)      
  },
   methods: {
        handleScroll (){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop!=0) {
            this.headCoverSilde = true;
          }else{
            this.headCoverSilde = false;
          }
        }
    },
    components:{
        vBread,
        vNavigation
    }
}
</script>
