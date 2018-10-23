<template>
<div :class="headCoverSilde?'slide':''">
   <vNavigation></vNavigation>
   <div class="headCover">
      <div class="introduce-title">
          <h1>生活</h1>
          <p class="subline" style="margin-bottom: 600px;">滋润一点</p>
      </div>
      <div id="view-Body" class="view-Body view-body-main" style="padding: 0px;">
      <div class="container">
          <div class="work-content">
              <h3 class="work-cate">移动端</h3>
              <ul class="work-list">
                <li class="work-item item-long">
                <div class="item-img"><img alt="" class="" src="http://www.yunplus.com.cn/lhyblog/works/images/iphone_anim.jpg"></div>
                <p class="item-title">半夜说要改版头，我的内心是崩溃的</p>
                <p class="item-info">
                <span><img class="wx-ewm" alt="" src="http://www.yunplus.com.cn/lhyblog/works/images/ewm_iphone.png">使用css3模拟iphone接听电话的场景</span></p>
                <a class="item-href" target="_blank" href="http://h5.yunplus.com.cn/cases/iphone_anim/ewm.php">点击查看主页或源码</a>
                </li>
                <li class="work-item item-long">
                <div class="item-img"><img alt="" class="" src="http://www.yunplus.com.cn/lhyblog/works/images/tzal.PNG"></div>
                <p class="item-title">挑战阿里笔试官</p>
                <p class="item-info">
                <span><img class="wx-ewm" alt="" src="http://www.yunplus.com.cn/lhyblog/works/images/ewm_tzal.png">用animate.css和kimi制作滑屏动画，非工具制作。</span></p>
                <a class="item-href" target="_blank" href="http://tms.alicdn.com/market/seller/2016xz_pk.php?from=timeline&isappinstalled=0">点击查看主页或源码</a>
                </li> 
                <li class="work-item item-long">
                <div class="item-img"><img alt="" class="" src="/static/images/life/wpdxcx.png"></div>
                <p class="item-title">微拍贷（微信小程序DEMO）</p>
                <p class="item-info">
                <span>根据微信api进行小程序开发,写完了大部分页面。</span></p>
                <a class="item-href" target="_blank" href="https://github.com/a913839175/wpdminiAPP">点击查看主页或源码</a>
                </li>
                <li class="work-item item-long">
                <div class="item-img"><img alt="" class="" src="/static/images/life/miden.png"></div>
                <p class="item-title">公众号中秋H5小游戏</p>
                <p class="item-info">
                <span>模仿凡客技术游戏营销的部分思路,基于公众号利用jssdk+canvas进行分享,然后客户关注公众号然后玩游戏抽取加息劵进行投资。</span></p>
                <a class="item-href" target="_blank" href="https://github.com/a913839175/MidAutumnActive">点击查看主页或源码</a>
                </li>
                <li class="work-item item-long">
                <div class="item-img"><img alt="" class="" src="/static/images/life/xrcfh5.jpg"></div>
                <p class="item-title">星融财富H5界面</p>
                <p class="item-info">
                <span>本页面采用rem单位和jquery配合php进行开发</span></p>
                <a class="item-href" target="_blank" href="http://www.istarwealth.com/">点击查看主页或源码</a>
                </li>    
              </ul>
              <h3 class="work-cate">PC端</h3>
              <ul class="work-list">
                <li class="work-item">
                <div class="item-img2"><img alt="" class="" src="http://www.yunplus.com.cn/lhyblog/works/images/fwsc.png" class="item-imgh"></div>
                <p class="item-title">服务市场-文章页面模板</p>
               <p class="item-info"><span>本页面采用tms模块搭建，运营可以自由在后台编辑文章内容</span></p>
                <a class="item-href" target="_blank" href="https://www.taobao.com/markets/fuwu/dtyx">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                <div class="item-img2"><img alt="" class="" src="/static/images/life/wpd.png" class="item-imgh"></div>
                <p class="item-title">微拍贷理财</p>
               <p class="item-info"><span>本页面采用Seajs进行大型项目管理(代码已删除php部分)</span></p>
                <a class="item-href" target="_blank" href="http://old.weipaidai.com">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                <div class="item-img2"><img alt="" class="" src="/static/images/life/xrxy.png" class="item-imgh"></div>
                <p class="item-title">星融学院后台管理系统</p>
               <p class="item-info"><span>本页面采用vue+elementui完成开发的</span></p>
                <a class="item-href" target="_blank" href="https://github.com/a913839175/xrxy">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                <div class="item-img2"><img alt="" class="" src="/static/images/life/czwl.jpg" class="item-imgh"></div>
                <p class="item-title">车栈后台管理系统</p>
               <p class="item-info"><span>本页面采用vue+elementui+vuex(用动态路由进行用户权限管理)完成开发的</span></p>
                <a class="item-href" target="_blank" href="https://github.com/a913839175/carStack">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                <div class="item-img2"><img alt="" class="" src="/static/images/life/xrcfpc.png" class="item-imgh"></div>
                <p class="item-title">星融财富官网</p>
               <p class="item-info"><span>本页面采用普通的html和jquery配合php进行开发</span></p>
                <a class="item-href" target="_blank" href="http://www.istarwealth.com/">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                <div class="item-img2"><img alt="" class="" src="/static/images/life/ykgt.png" class="item-imgh"></div>
                <p class="item-title">元康国投</p>
               <p class="item-info"><span>这是元康国投jsp版本，前后分离，java负责接口，前端负责剩下的数据交互和部分controller代码的编写</span></p>
                <a class="item-href" target="_blank" href="https://github.com/a913839175/ykgt">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                <div class="item-img2"><img alt="" class="" src="/static/images/life/vueblog.png" class="item-imgh"></div>
                <p class="item-title">vue个人博客</p>
               <p class="item-info"><span>本页面采用vue完成开发的(php接口自己完成)</span></p>
                <a class="item-href" target="_blank" href="http://sxr.luhuiyue.cn">点击查看主页或源码</a>
                </li>
              </ul>
              <h3 class="work-cate">组件类</h3>
               <ul class="work-list">
                <li class="work-item">
                  <div class="item-img2"><img alt="" class="" src="/static/images/PlugIn/calendar.jpg" class="item-imgh"></div>
                  <p class="item-title">日历组件</p>
                  <p class="item-info"><span>本组件可一个页面加载多个日历。</span></p>
                  <a class="item-href" target="_blank" href="https://github.com/a913839175/calendar">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                  <div class="item-img2"><img alt="" class="" src="/static/images/PlugIn/shuffling.jpg" class="item-imgh"></div>
                  <p class="item-title">轮播组件</p>
                  <p class="item-info"><span>本组件是一个模仿苏宁的jquery轮播组件。</span></p>
                  <a class="item-href" target="_blank" href="https://github.com/a913839175/shuffling">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                  <div class="item-img2"><img alt="" class="" src="/static/images/PlugIn/3d.jpg" class="item-imgh"></div>
                  <p class="item-title">3D旋转</p>
                  <p class="item-info"><span>本组件是利用css动画实现的一个3D翻转。</span></p>
                  <a class="item-href" target="_blank" href="https://github.com/a913839175/3D-">点击查看主页或源码</a>
                </li>
                <li class="work-item">
                  <div class="item-img2"><img alt="" class="" src="/static/images/PlugIn/jssdk.jpg" class="item-imgh"></div>
                  <p class="item-title">jssdk</p>
                  <p class="item-info"><span>连接通微信api,php是网上自己找的然后调试成功的</span></p>
                  <a class="item-href" target="_blank" href="https://github.com/a913839175/jssdk">点击查看主页或源码</a>
                </li>
              </ul>
          </div>
      </div>
      <vBread></vBread>
      </div>
  </div>
   <div class="head-arrow-down">
        <a href="javascript:scroll(0,1)"><i aria-hidden="true" class="animate-movedown fa fa-angle-double-down"></i><br><p>下拉获取更多</p></a>

    </div> 
</div>
</template>
<style scoped>
@import '../../../static/css/life.css';    
</style>
<script>
import vBread from '@/components/common/bread.vue';
import vNavigation from '@/components/common/navigation.vue';
export default {
  name: 'life',
  data () {
    return {
      headCoverSilde:false,
      total:5230,  
    }
  },
  created() {
     this.getAdminList();
  },
  mounted () {
      window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
       handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop!=0) {
            this.headCoverSilde = true;
          }else{
            this.headCoverSilde = false;
          }
        },
        getAdminList(){
            var _this=this; 
            const params = {};
            _this.$ajax.online(params).then((res)=> {
                console.log(res)
                _this.total = _this.total + parseInt(res.data.total)
            });
        }
    },
    components:{
        vBread,
        vNavigation
    }
}
</script>
