<template>

<div :class="headCoverSilde?'slide':''">
   <div class="headCover">
    <div class="main-nav">
        <ul>
            <li>
                <router-link to="/share">技术杂谈</router-link> 
            </li>
            <li>
                <router-link to="/utility">实用工具</router-link>      
            </li>
            <li>
                <router-link to="/life">生活</router-link>
            </li>
            <li>
                <router-link to="/aboutme">关于我</router-link>
            </li>
        </ul>
    </div>
    <div class="introduce-title">
        <h1>我叫小鱼</h1>
        <p class="subline" style="margin-bottom: 600px;">分享网络、博客、软件及其它趣事</p>
    </div>
    <div id="view-Body" class="view-Body view-body-main" style="padding: 0px;">
    <div class="container" style="text-align: center;">
        <header class="codrops-header" style="padding-top: 6px;">
            <h1>我是一名94年生的coder<span><br>一名刚刚毕业的菜鸟小码农，热爱生活，喜欢设计，<br><br>严谨，强迫症，爱玩，爱电影，爱运动<br><br>这是我的地盘，分享技术经验，生活琐事，见闻趣事。<br><br><br></span> <span style="font-size: 14px; font-weight: 500; margin-top: 40px;">—— 欢迎你！第 <font style="font-size: 34px;">{{total}}</font> 位访问的游客 ——</span></h1>
        </header> 
        <ul class="grid clearfix">
            <li  class="gridli2">
                <img alt="img02" src="/static/images/index/2.jpg"> 
                <div class="technology">
                    <h2>技术 <span>杂谈</span></h2> 
                    <p>在 技 术 上，<br>时 刻 保 持 谦 虚。</p> 
                    <router-link to="/share">View more</router-link> 
                </div>
            </li>
            <li  class="gridli1">
                <img alt="img01" src="/static/images/index/1.jpg"> 
                <div class="LeaveMessage">
                    <h2>使用工具 </h2> 
                    <p>喜 欢 分 享 相 互 学 习。</p> 
                    <a href="/contact#leave_message">View more</a>
                </div>
            </li>  
            <li  class="gridli3">
                <img alt="img08" src="/static/images/index/8.jpg"> 
                <div class="life">
                    <h2>生活 <span>分享</span></h2> 
                    <p>喜 欢 有 趣 的 生 活。</p> 
                    <router-link to="/life">View more</router-link> 
                </div>
            </li> 
            <li  class="gridli4">
                <img alt="img09" src="/static/images/index/cj0.jpeg"> 
                <div class="aboutus">
                    <h2>关 于  <span>我</span></h2> 
                    <p>我 知 道，你 很 想 遇 见 我。</p> 
                    <a href="/contact">View more</a>
                </div>
            </li>
        </ul>
        <vBread></vBread>
    </div> 
    </div>

</div> 
 <div class="head-arrow-down">
        <a href="javascript:scroll(0,1)"><i aria-hidden="true" class="animate-movedown fa fa-angle-double-down"></i><br><p>下拉获取更多</p></a>
    </div>
</div>
</template>
<style scoped>
@import '../../../static/css/homepage.css';    
</style>
<script>
import vBread from '@/components/common/bread.vue';
console.log(vBread)
export default {
  name: 'index',
  data () {
    return {
      headCoverSilde:false,
      total:5230, 
      isLoadFlag:true, 
    }
  },
  created() {
     var _self = this;
     this.getAdminList();
     //ajax请求的函数
      document.onreadystatechange = function(){
        console.log(document.readyState);
        //文档载入完成后
        if(document.readyState == 'complete'){
            _self.isLoadFlag = false;
        }
      }
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
                _this.total = _this.total + parseInt(res.total)
            });
        }
    },
    components:{
        vBread
    }
}
</script>
