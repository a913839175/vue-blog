<template>
   <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header clearfix">
                    <button type="button" class="navbar-toggle collapsed in"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                    <router-link to="/" class="navbar-brand">
                        <img src="/static/images/nav/111.png">
                    </router-link>
                </div>
                <div id="nav-bar" aria-expanded="false" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link to="/share">
                                <img src="/static/images/nav/home.svg" class="navIcon">技术杂谈
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/utility">
                                <img src="/static/images/nav/article.svg" class="navIcon">实用工具
                            </router-link>
                        </li>
                        <li>
                           <router-link to="/life">
                                <img src="/static/images/nav/video.svg" class="navIcon">生活
                           </router-link>
                        </li>
                        <li>
                            <router-link to="/aboutme">
                                <img src="/static/images/nav/phone.svg" class="navIcon">关于我
                            </router-link>
                        </li> <span class="slide-nav-bar" style="left: 329.516px; opacity: 0; width: 68px; top: 56px;"></span>
                    </ul>
                </div>
            </div>
        </nav>
</template>
<style scoped>
    .navbar {
    min-height: 60px;
    margin-bottom: 20px;
    display: none;
}
.navbar, .navbar-inverse {
    border-radius: 0;
    background: 0 0;
    border: none;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    position: fixed;
    background-color: #fff!important;
    width: 100%;
    z-index: 99;
    box-shadow: 0 1px 5px rgba(0,0,0,.1);
    -webkit-box-shadow: 0 1px 5px rgba(0,0,0,.1);
    -moz-box-shadow: 0 1px 5px rgba(0,0,0,.1);
    /* opacity: 0; */
}
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.navbar-inverse .navbar-toggle {
    border-color: #333;
}
.navbar-brand {
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
}
.navbar-brand {
    margin: 0 30px;
    height: 60px;
}
.navbar-brand>img {
    display: block;
}
.navbar-brand>img {
    height: 100%;
    width: auto;
}
.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {
    border-color: #eee;
}
.navbar-collapse {
    padding-right: 15px;
    padding-left: 15px;
    overflow-x: visible;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid transparent;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
}
.navbar-nav {
    float: left;
    position: relative;
}
.navbar-inverse .navbar-nav>li>a {
    color: #9d9d9d;
}
.navIcon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 4px;
}
.nav>li>a {
    position: relative; 
}
.slide-nav-bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 5px;
    background-color: #2298d1;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
}
.navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
    background-color: #eee;
}
.navbar-inverse .navbar-toggle {
    border-color: #333;
}
.navbar-toggle {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}
.navbar-inverse .navbar-toggle .icon-bar {
    background-color: #222!important;
}
.navbar-toggle .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
}
.navbar-toggle .icon-bar+.icon-bar {
    margin-top: 4px;
}
.collapse.in {
    display: block;
}
.navbar-nav>li>a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
}
.nav>li>a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
.slide .navbar{
  display: block!important;
}
@media (min-width: 768px){
  .navbar {
      border-radius: 4px;
  }
  .navbar-nav {
      float: left;
      margin: 0;
  }
  .navbar-header>a, .navbar-nav>li>a {
    line-height: 60px;
    display: block;
    color: #555!important;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    padding: 0 20px;
  }
  .navbar-header>a, .navbar-nav>li>a {
    line-height: 60px;
    display: block;
    color: #555!important;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    padding: 0 20px;
  }

  .navbar-toggle {
    display: none;
  }
  .container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header {
    margin-right: 0;
    margin-left: 0;
  }
  .navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {
    margin-left: -15px;
  }
  .navbar-brand>img {
    padding: 15px;
  }
  .navbar-collapse.collapse {
    display: block!important;
    height: auto!important;
    padding-bottom: 0;
    overflow: visible!important;
  }
  .navbar-collapse {
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .navbar-nav>li {
    line-height: 60px;
    position: relative;
  }
  .navbar-nav>li {
    float: left;
  }

    .navbar-header {
    float: left;
  }
}
</style>
<script>
export default {
  // data () {
  //   return {
  //     clientHeight:'',
  //   }
  // },
  // created(){
  //   var _this = this;
  // },
  // mounted () {
  //   this.initHeight(); 
  // },
  // watch: {
  //     // 如果 `clientHeight` 发生改变，这个函数就会运行
  //     clientHeight: function () {
  //       console.log(1)
  //       this.changeFixed(this.clientHeight)
  //     }
  // },
  // methods: {
  //   changeFixed(clientHeight){                        //动态修改样式
  //       console.log(clientHeight);
  //       this.$refs.homePage.style.height = clientHeight+'px';
  //   },
  //   initHeight(){  //获取高度
  //     //获取浏览器可视区域高度
  //     this.clientHeight = document.documentElement.clientHeight;
  //     // console.log($(document).height());//浏览器可视区域对象宽度
  //     window.onresize = () => {  //当窗口或框架发生改变时触发
  //       console.log("onresize进来了");
  //       this.clientHeight = document.documentElement.clientHeight;
  //     };
  //   }   
  // },
  // components:{
  // }
}
</script>`  
