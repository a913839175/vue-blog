<template>
    <div :class="headCoverSilde?'slide':''">
        <vNavigation></vNavigation>
        <div class="headCoverDetail"  :style="{background: 'url(./static/images/article/'+ addList.photo +')'}">
            <div class="title">
                 <h1>{{addList.title}}</h1> 
                 <h2 class="title-h2"><span><i aria-hidden="true" class="fa fa-user"></i>{{addList.auth}}</span><br><br> <span class="title-h2-date">date:  {{addList.time}}</span><br></h2> 
                <br>
                 <h3 class="title-h3"><span class="title-h3-view"><i aria-hidden="true" class="fa fa-eye"></i> view {{addList.view}}</span> <span><a href="#comment" class="title-h3-comment"><i aria-hidden="true" class="fa fa-comments-o"></i> comment {{addList.comment}}</a></span></h3>
            </div>
        </div>
        <div id="view-Body" class="view-Body view-body-detail clearfix">
            <div class="row" >
                <div class="container" id="container">
                  <div class="content-detail">
                    <div class="detail-title">
                        <h1>{{addList.title}}</h1>
                    </div>
                    <div class="content-fixed-bar">
                        <ul>
                            <li>
                                <a tabindex="0" role="button" data-toggle="popover" data-content="文章导航" href="javascript:void(0)" @click="guide()">
                                    <img src="/static/images/article/guide.png">
                                </a>
                            </li>
                            <li>
                                <a tabindex="0" role="button" data-toggle="popover" data-content="返回顶部" href="javascript:void(0)" @click="backtop()">
                                    <img src="/static/images/article/top.svg">
                                </a>
                            </li>
                            <li>
                                <a tabindex="0" role="button" data-toggle="popover" data-content="阅读模式" href="javascript:void(0)" @click="f11()">
                                    <img src="/static/images/article/reading.svg">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="content-guide"  :class="guideshow?'guideleft':''" id="ContentGuide">
                        <div class="content-guide-head clearfix"><a href="javascript:void(0)" class="head-close">
                        <i aria-hidden="true" class="fa fa-close" @click="CloseGuide()"></i></a><a href="javascript:scroll(0,0)">目录</a>
                        </div>
                        <ul class="guide-list">
                            <li :class="item.class" v-for="(item) in navList">
                              <a :href="item.href">{{item.title}}</a>
                            </li>
                        </ul>
                    </div>
                    <h1 ref="test">{{msg}}</h1>
                    <div class="contents" v-html="addList.content" id="contents"></div>
                    <div class="pay-for">
                        <a href="javascript:;" class="thumbUpAnimate " :class="thumbsUpFlag?'thumbUpAlready':''" @click="setArticleThumbUp()">
                            <transition mode="out-in" name="bounce"> <i key="up" v-if="thumbsUpFlag" style="font-size:18px;" class="fa fa-thumbs-up" aria-hidden="true"></i>
                              <i key="down" v-else style="font-size:18px;" class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            </transition>{{thumbsUpFlag?'已点赞':''}}  {{thumbsUp}}</a>
                    </div>
                    <div class="article-next-pre">
                        <ul class="clearfix">
                            <li class="apre">
                                <router-link :to="{path:'sharedetails',query:{id:updownList.prev.id}}" @click.native="flushCom()">← PREVIOUS
                                    <br><span>{{updownList.prev.title}}</span>
                                </router-link>
                            </li>
                            <li class="anext">
                                <router-link :to="{path:'sharedetails',query:{id:updownList.next.id}}" @click.native="flushCom()">NEXT →
                                    <br><span>{{updownList.next.title}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div id="reply" class="block inner a-fadeinR">
                        <div id="reviewer-info">
                          <div class="row">
                            <input type="text" name="a_uthor" v-validate ="'required'"  placeholder="0-20个字符" size="20" maxlength="20" id="author"  v-model="a_uthor">
                            <label for="author" class="small">用户名<span class="red">*必填</span></label>
                            <span v-show="errors.has('a_uthor')" style="color:red">{{ errors.first('a_uthor')}}</span>
                          </div>
                          <div class="row">
                            <input type="text" name="email"  v-validate ="'required|email'"  placeholder="请输入正确邮箱" size="24" id="email" maxlength="24"  v-model="email">
                            <label for="email" class="small">邮箱<span class="red">*必填但不公布</span></label>
                            <span v-show="errors.has('email')" style="color:red">{{ errors.first('email')}}</span>
                          </div>
                          <div class="row">
                            <textarea name="c_ontent" id="comment" v-validate ="'required'" cols="50" class="dspinlineblock" placeholder="请输入提问留言内容，500字以内" rows="7" maxlength="500" v-model="c_ontent"></textarea>
                            <label for="email" class="small dspinlineblock"><span class="red">*必填</span></label>
                            <span v-show="errors.has('c_ontent')" style="color:red">{{ errors.first('c_ontent')}}</span>
                          </div>
                          <div class="row">
                            <input id="comment-submit" name="submit" type="submit" tabindex="5" value="发布留言" class="sendmessage" @click="setmessage()">
                          </div>
                        </div>
                      </div>
                      <div id="comments" class="block"  v-for="(item,key) in messList">
                          <ol class="commentlist" id="commentlists">
                            <li id="comment-5b7cd849c58f1e48c927955a" class="comment clearfix">
                              <img src="https://www.haorooms.com/logo/logo36X36.jpg" width="36" height="36" class="avatar" alt="">
                              <div class="content">
                                <div class="info">
                                  <span class="reviewer">{{item.username}}</span>
                                  <time datetime="2018-08-22T11:28:09+08:00">{{item.addtime}}</time>
                                  <div class="floor">{{key + 1}}</div>
                                </div>
                                <div id="commentbody-53684" class="description" itemprop="description">{{item.text}}</div>
                              </div>
                            </li>
                          </ol>
                     </div>

                  </div>
            </div>
            <vBread></vBread>
        </div>
        <div class="head-arrow-down"> <a href="javascript:scroll(0,1)"><i aria-hidden="true" class="animate-movedown fa fa-angle-double-down"></i><br><p>下拉获取更多</p></a>
        </div>
    </div>
</template>
<style scoped>
@import '../../../static/css/sharedetails.css';    
</style>
<script>
import { Validator } from 'vee-validate';
import vNavigation from '@/components/common/navigation.vue';
import vBread from '@/components/common/bread.vue';
export default {
  name: 'sharedetails',
  data () {
    return {
      msg:'Hello vue',
      headCoverSilde:false,
      id:'',
      addList:'',
      thumbsUpFlag:false,
      thumbsUp:'',
      a_uthor:'',
      email:'',
      c_ontent:'',
      updownList:{
        prev:{},
        next:{},
      },
      messList:[],
      shtml:'',
      navList:[],
      guideshow:false,
      isFullScreen:false
    }
  },
  created() {
    var _this = this;
    _this.getsession();
    _this.id = this.$route.query.id;
    _this.getArticleThumbUpById();
    _this.updown();
    _this.getmessage();
    _this.adDList();
    _this.backtop();
    
  },
  mounted: function(){
      var _this = this;
      window.addEventListener('scroll', this.handleScroll);
      _this.fullScreenChange();
      _this.guideleft();  

  },
  methods: {
      getsession(){
        var _this = this;
        var username=sessionStorage.getItem("username");
        var email=sessionStorage.getItem("email");
        if(username){
            _this.a_uthor = username
        }
        if(email){
           console.log(1)
           _this.email = email
        }
      },
      handleScroll (){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop!=0) {
          this.headCoverSilde = true;
        }else{
          this.headCoverSilde = false;
        }
      },
      adDList(){
        var _this = this;
        var params={
          id:_this.id
        }
        _this.$ajax.articledetails(params).then((res)=> {         
            _this.addList = res.data.data[0];
            //数据更新后，vue的值会变化，但是innerhtml的值不会变化，$nextTick回调函数在 DOM 更新完成后就会调用。  
            _this.$nextTick(function () {         
              _this.guide();
              _this.guideshow = false;
            })           
        });
        
      },
      guide: function () {
          var _this =this;
          _this.navList = []; 
          var e = _this.navList;
          _this.guideshow = !_this.guideshow;
          document.getElementById("contents").querySelectorAll('h3,h4').forEach(function(v,k){
              var i = v.tagName.replace("H", ""),
                  s = {
                      title: v.innerText,
                      href: "#" + v.innerText,
                      class: "guide-list-h" + i
                  };
              e.push(s),v.setAttribute('id',v.innerText);
              
          })
          _this.guideleft(); 
      },
      getArticleThumbUpById(){
        var _this = this;
          var params = {
            id:_this.id
          };
          _this.$ajax.getArticleThumbUpById(params).then((res)=> {
            _this.thumbsUpFlag = res.code;
            _this.thumbsUp = res.zans;
          });
      },
      setArticleThumbUp(){
        var _this = this;
          var params = {
            id:_this.id
          };
          _this.$ajax.setArticleThumbUpById(params).then((res)=> {
            _this.thumbsUpFlag = res.data.code;
            _this.thumbsUp = res.data.zans;
          });
      },
      updown(){
        var _this = this;
        var params = {
          id:_this.id
        };
         _this.$ajax.updown(params).then((res)=> {
            _this.updownList = res.data;
         });
      },
      flushCom:function(){
        this.$router.go(0);
      },
      setmessage:function(){
      this.$validator.validateAll().then((result)=>{
            var _this = this;
            var params = {
              artid:_this.id,
              username:_this.a_uthor,
              email:_this.email,
              test:_this.c_ontent
            };
           if(result){
               _this.$ajax.setmessage(params).then((res)=> {
                  if(res.data.success == "ok"){
                      sessionStorage.setItem("username", _this.a_uthor);
                      sessionStorage.setItem("email", _this.email);
                      _this.getmessage();
                      _this.c_ontent="";
                  }
               });
           }else{
              console.log("没有提交")
           }
        })
        
      },
      getmessage:function(){
        var _this = this;
        var params = {
          id:_this.id,
        };
        _this.$ajax.getmessage(params).then((res)=> {
            _this.messList = res.data.List;
        });
      },
      backtop:function(){
            var scrollToptimer = setInterval(function () {
            var top =document.body.scrollTop || document.documentElement.scrollTop;
            var speed = top / 4;
            if (document.body.scrollTop!=0) {
                document.body.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
              if (top == 0) {
                  clearInterval(scrollToptimer);
              }
            }, 30); 
      },
      CloseGuide:function(){
        var _this = this;
        _this.guideshow = false;
      },
      f11(){
           if (!this.isFullScreen) {
                var e = document.getElementById("container")
                if(e.requestFullscreen){
                  e.requestFullscreen()
                }else if(e.mozRequestFullScreen){
                   e.mozRequestFullScreen() 
                }else if(e.webkitRequestFullScreen){
                  e.webkitRequestFullScreen()
                }
                // (e = document.getElementById("container")).requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ?
                // e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen()
            }
            if (this.isFullScreen) {
                // var e;
                // (e = document).exitFullscreen ? e.exitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() :
                //     e.webkitCancelFullScreen && e.webkitCancelFullScreen()
                if(document.exitFullscreen){
                   document.exitFullscreen()
                }else if(document.mozCancelFullScreen){
                   document.mozCancelFullScreen()
                }else if(document.webkitCancelFullScreen){
                  document.webkitCancelFullScreen()
                }
                console.log("F11")
            }
      },
      fullScreenChange: function () {
            var e = this;
            document.addEventListener("fullscreenchange", function () {
                e.isFullScreen = !e.isFullScreen
            }), document.addEventListener("webkitfullscreenchange", function () {
                e.isFullScreen = !e.isFullScreen
            }), document.addEventListener("mozfullscreenchange", function () {
                e.isFullScreen = !e.isFullScreen
            }), document.addEventListener("MSFullscreenChange", function () {
                e.isFullScreen = !e.isFullScreen
            })
      },
      guideleft:function(){
          var _this = this;
          // console.log(document.body.offsetWidth)
          var ContentGuide = document.getElementById('ContentGuide');
          // ContentGuide.style.left = '-500px'
          if(document.body.offsetWidth - 8 > 767){
              ContentGuide.style.left = - ContentGuide.offsetWidth + 'px';
          }else{
              console.log("进来了")
              ContentGuide.style.top = -  ContentGuide.offsetHeight+ 'px';
          }    
      }  
  },
  components:{
      vBread,
      vNavigation
  }
}
</script>
