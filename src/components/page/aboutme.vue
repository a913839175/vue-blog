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
                                        <p>4、用jsp把php版本的前端页面改版,前后分离的模式，后台负责接口，前台负责数据的调用和页面的渲染和维护。</p>
                                        <p></p>
                                        <p>5、负责日常活动的H5小游戏，编写简单的H5游戏和jssdk的调用，和后台数据的交互</p>
                                        <p></p>
                                        <p>6、日常研究微信小程序,根据app的图写了大部分的微信小程序demo</p>
                                        <p></p>
                                        <p>7、日常有时间用vue+php,接口自己用php编写,前端页面自己用vue进行编写。</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="m-table">
                             <h3 class="m-title"><span>项目经验</span></h3>
                            <div class="m-content">
                                <ul class="m-list">
                                    <li class="list-title font500">阿里外包活动页面前端开发（2015/10–2016/6）</li>
                                    <li class="list-desc">用到的技术：Kissy、Kimi、Zepto、Less、Tms等</li>
                                    <li class="list-desc">简介：负责淘宝、天猫、手淘等外包活动页面前端模块化开发</li>
                                    <li class="list-desc">项目业绩： 通过这些活动页面的开发，掌握了kissy，kimi等前端框架的使用，模块化开发的原理及优势，能满足各类需求。</li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-title font500">半夜说要改版头,我的内心是奔溃的。</li>
                                    <li class="list-desc">css3+anminate模拟打电话</li>
                                    <li class="list-desc">简介：公司内部的活动娱乐页面</li>
                                    <li class="list-desc">做改项目的原因： 在博彦遇到68大促和双11活动，页面特别多，加班特别频繁，故加完班后，公司组织的活动页面给大家开心开心，放松放松！！</li>
                                    <li class="list-desc">demo地址：<a href="https://github.com/a913839175/night">https://github.com/a913839175/night</a></li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-title font500">微拍贷理财页面</li>
                                    <li class="list-desc">用到的技术：seajs、jquery和许多插件等</li>
                                    <li class="list-desc">简介：微拍贷专门供给借款人的理财页面。使用seajs对js进行模块化管理!</li>
                                    <li class="list-desc">demo地址：<a href="http://www.old.weipaidai.com">http://www.old.weipaidai.com</a></li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-title font500">元康国投jsp版本</li>
                                    <li class="list-desc">用到的技术：jsp，el表达式，controller部分的java代码,eacher画图软件</li>
                                    <li class="list-desc">简介：公司页面迎来大修改，不用php,因为我们页面需要兼容ie8,,选了jsp来改变微拍贷的项目，然后后台负责接口，前台进行对数据进行渲染和部分controller文件的编写，达到前后分离，java把jar文件发给我们前端，前端用docker部署在虚拟机上，然后就解决java代码重启的时候对我们代码调试造成影响，迎合当前web开发的主流，后因政策原因未能上线！！！</li>
                                    <li class="list-desc">demo地址：<a href="https://github.com/a913839175/ykgt">https://github.com/a913839175/ykgt</a></li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-title font500">中秋h5小游戏</li>
                                    <li class="list-desc">用到的技术：canvas画图技术，和jsask调用微信api</li>
                                    <li class="list-desc">简介：公司运营一直用凡客技术的游戏活动页面,然后到期后，我们模仿凡客思路，制作了一套壳，然后利用canvas做了一个吃月饼的游戏，绑定微信公众号，然后通过让客户玩游戏，抽取加息券，然后打电话给客服，兑换加息券后，客户进行投资。</li>
                                    <li class="list-desc">demo地址：<a href="https://github.com/a913839175/MidAutumnActive">https://github.com/a913839175/MidAutumnActive</a></li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-title font500">星融学院后台管理系统</li>
                                    <li class="list-desc">用到的技术：vue+elementui</li>
                                    <li class="list-desc">简介：公司开发星融学院后台,正好赶上后台用java，然后前端就能用到vue,加上elementui,本套系统主要是添加会员，添加可能，上传图片，视频传到腾讯云，然后就可以在app上显示课程给投顾进行学习。</li>
                                    <li class="list-desc">demo地址：<a href="https://github.com/a913839175/xrxy">https://github.com/a913839175/xrxy</a></li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-title font500">车栈后台管理系统</li>
                                    <li class="list-desc">用到的技术：vue+elementui+vuex</li>
                                    <li class="list-desc">简介：前公司的老板他们公司还没招到前端，委托我们做一个后台管理系统，由于需要设置角色权限,登陆角色后获取后台给的json数据，和编写好的json数据进行对比，筛选出路需要的配置动态的加载进去，然后对客户车次进行登记，然后对车次的价格进行评估和授权，然后发起一个金融标的，对标的进行初审复审，然后给客户进行打钱，客户把车子抵押给东西</li>
                                    <li class="list-desc">demo地址：<a href="https://github.com/a913839175/carStack">https://github.com/a913839175/carStack</a></li>
                                </ul>
                                <ul class="m-list">
                                    <li class="list-title font500">vue博客</li>
                                    <li class="list-desc">用到的技术：vue+vuex+php</li>
                                    <li class="list-desc">简介：有段时间由于监管支付通道停止，然后有所有时间进行学习，就通过vue编写了一个博客，也加入了页面响应式的代码，让页面通过屏幕大小的变化而变化，博客这块主要是技术详谈中的详情页花费的时间精力比较多，之前项目中碰到的问题找到答案后，然后把文章复制过来，通过百度富文本编辑器，上传到自己的后台放进数据库进行存储,然后前端对页面的h3标题和H4标题进行提取，加入到导航，还有全屏模式，还有文章的留言功能，这博客的php接口都自己完成，很多是拷贝网上的代码，比如图片上传，增删该查的sql等等，vue文件he php文件用nginx部署到阿里云。</li>
                                    <li class="list-desc">demo地址：<a href="http://sxr.luhuiyue.cn">http://sxr.luhuiyue.cn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="m-table">
                            <h3 class="m-title"><span>个人评价</span></h3>
                            <div class="m-content">
                                <p>深度互联网从业人员，对互联网保持高度的敏感性和关注度，熟悉产品开发流程，有很强的开发能力，能独立承担WEB项目的管控工作。</p>
                                <p>我正在寻找一个更好的发展平台，希望能够充分发挥自己的优势，共同努力成就一番事业。</p>
                                <br>个人博客主页：<a href="http://sxr.luhuiyue.cn">http://sxr.luhuiyue.cn</a>
                                <a href="" target="_blank"></a>
                                <br>git项目主页：<a href="https://github.com/a913839175">https://github.com/a913839175</a>
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
