<template>
    <div :class="headCoverSilde?'slide':''">
        <vNavigation></vNavigation>
        <div class="headCover">
            <div class="introduce-title">
                 <h1>技术分享</h1>
                <p class="subline" style="margin-bottom: 600px;">保持谦逊</p>
            </div>
            <div id="view-Body" class="view-Body view-body-main">
                <div class="container">
                  <div v-for="item in ArticleList">
                    <div class="content-item" @click = "func(item.id)">
                          <div class="rowitem-left">
                              <img :src="item.photo" style="cursor: pointer;">
                          </div>
                          <div class="rowitem-right">
                              <div class="rowitem-title"><h1 style="margin: 0px;">{{item.title}}</h1>
                                  <p style="cursor: pointer;">{{item.title}}<a href="/detail/151">......</a>
                                  </p>
                              </div>
                          </div>
                          <div class="rowitem-foot" style="clear:both">
                              <span style="float:left"><i aria-hidden="true" class="fa fa-clock-o"></i>{{item.time}}<i aria-hidden="true" class="fa fa-user pal5"></i> {{item.auth}}</span> 
                              <span class="rowitem-foot-span" style="float:right">
                              <a href="javascript:;" class="thumbup">
                              <i class="fa fa-thumbs-o-up"></i> <font>{{item.zans}}</font>
                              </a>    
                              <a href="javascript:;" class="eyes pal5"><i aria-hidden="true" class="fa fa-eye"></i>{{item.view}}</a>
                              <a href="javascript:;" class="comment pal5"><i aria-hidden="true" class="fa fa-comment-o"></i>{{item.comment}}</a>
                              </span>
                          </div>
                    </div>
                  </div>
                  <div class="pagefoot">
                      <ul class="pager">
                          <li class="previous"><a href="javascript:void(0)"><i aria-hidden="true" class="fa fa-step-backward"></i></a>
                          </li>
                          <li class="next"><a href="javascript:void(0)"><i aria-hidden="true" class="fa fa-step-forward"></i></a>
                          </li>
                          <li class="previous"><a href="javascript:void(0)" @click="prev()">上一页</a>
                          </li>
                          <li class="next"><a href="javascript:void(0)" @click="next()">下一页</a>
                          </li>
                          <li><a href="javascript:void(0)"><span aria-hidden="true">{{page}} / {{pagesize}}</span></a>
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
@import '../../../static/css/share.css';    
</style>
<script>
import vBread from '@/components/common/bread.vue';
import vNavigation from '@/components/common/navigation.vue';
export default {
  name: 'share',
  data () {
    return {
      headCoverSilde:false,
      page:1,
      epage:5,
      total:1,
      ArticleList:[],
      pagesize:1, 
      photoUrl:'./static/images/article/', 
    }
  },
  created() {
    this.getArticleList(); 
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
        getArticleList(){
            var _this = this; 
            var params = {
                page:_this.page,
                epage:_this.epage
            };
            _this.$ajax.articleList(params).then((res)=> {
              console.log(res.data.data)
                _this.total = res.data.total;
                _this.pagesize = Math.ceil(res.data.total / _this.epage);
                if(_this.total){
                  _this.ArticleList = res.data.data
                }
            });
        },
        prev(){
          var _this = this;
          if(_this.page == 1){
            _this.page = 1;
          }else{
            _this.page = _this.page -1;
          }
          this.getArticleList();
        },
        next(){
          var _this = this;
          
          if(_this.page >= _this.pagesize){
            _this.page = _this.pagesize;
          }else{
            _this.page = _this.page +1;
          }
          this.getArticleList();
        },
        func(event){
          // console.log(event)
          this.$router.push({path: '/sharedetails', query:{id: event}});
        }
    },
    components:{
        vBread,
        vNavigation
    }
}
</script>
