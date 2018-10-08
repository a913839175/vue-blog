<template>
   <transition name="fadeMask">
        <div class="loadSpinner">
            <div class="boxText"> 页 面 正 在 赶 来 的 路 上。</div>
            <div class="boxLoading"></div>
        </div>
   </transition>
</template>
<style scoped>
    .loadSpinner {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(255,255,255,.99);
    z-index: 999
}
.boxText {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 150px;
    width: 200px;
    text-align: center;
    color: #708090
}
.boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0
}

.boxLoading::before {
    content: '';
    width: 50px;
    height: 5px;
    background: #000;
    opacity: .1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow .5s linear infinite
}

.boxLoading::after {
    content: '';
    width: 50px;
    height: 50px;
    background: #708090;
    animation: animate .5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px
}
@keyframes animate {
    17% {
        border-bottom-right-radius: 3px
    }

    25% {
        transform: translateY(9px) rotate(22.5deg)
    }

    50% {
        transform: translateY(18px) scale(1,.9) rotate(45deg);
        border-bottom-right-radius: 40px
    }

    75% {
        transform: translateY(9px) rotate(67.5deg)
    }

    100% {
        transform: translateY(0) rotate(90deg)
    }
}
@keyframes shadow {
    0%,100% {
        transform: scale(1,1)
    }

    50% {
        transform: scale(1.2,1)
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
