<template>
    <div :class="headCoverSilde?'slide':''">
        <vNavigation></vNavigation>
        <div class="headCover">
            <div class="introduce-title">
                 <h1>使用工具</h1>
                <p class="subline" style="margin-bottom: 600px;">喜欢分享</p>
            </div>
            <div id="view-Body" class="view-Body view-body-main">
                <div class="container">
                    <div id="useful" class="clearfix">
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/md5/" target="_blank">
                                <div class="i-head"> <span class="open open4">加</span>

                                    <p>在线MD5加密</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/json" target="_blank">
                                <div class="i-head"> <span class="open open2">J</span>

                                    <p>在线json格式化</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/imgbase64/" target="_blank">
                                <div class="i-head"> <span class="open open6">图</span>

                                    <p>在线图片解码编码</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/photoshop" target="_blank">
                                <div class="i-head"> <span class="open open3">P</span>

                                    <p>在线PS工具</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/dksm/" target="_blank">
                                <div class="i-head"> <span class="open open2">端</span>

                                    <p>在线端口扫描</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/wbdb" target="_blank">
                                <div class="i-head"> <span class="open open1">文</span>

                                    <p>在线文本对比工具</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/3dfont/" target="_blank">
                                <div class="i-head"> <span class="open open3">字</span>

                                    <p>在线生成3D文字</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/google/" target="_blank">
                                <div class="i-head"> <span class="open open2">谷</span>

                                    <p>在线谷歌搜索</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/zxscym/" target="_blank">
                                <div class="i-head"> <span class="open open3">二</span>

                                    <p>在线生成二维码</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/fumosi" target="_blank">
                                <div class="i-head"> <span class="open open3">密</span>

                                    <p>在线摩斯密码</p>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="http://www.zan888.xyz/t/tool/hexconvert" target="_blank">
                                <div class="i-head"> <span class="open open1">进</span>

                                    <p>在线进制转换</p>
                                </div>
                            </a>
                        </li>
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
@import '../../../static/css/utility.css';    
</style>
<script>
import vBread from '@/components/common/bread.vue';
import vNavigation from '@/components/common/navigation.vue';
export default {
  name: 'utility',
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
