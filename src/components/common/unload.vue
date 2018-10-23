<template>
<div :class="headCoverSilde?'slide':''">
    <div class="container">
      <div class="form-group">
        <p class="uploading" @click="ArticleUp">文章上传</p> 
      </div>
      <div class="form-group">
            <label class="control-label">文章标题</label>
            <div class="form-input">
                <input class="input" type="text" name="title" placeholder="请输入文章标题" v-model="title">
            </div>
        </div>
       <div class="form-group">
            <label class="control-label">文章缩略图</label>
            <div class="form-input">
                <div class="uploading-imgInput">
                    <input  id="fileText" type="text" class="imgInput-file" name="pic" placeholder="请输入文章缩略图" v-model="imagepath">      
                    <button type="button" id="uploadFile" @click="uploadFile()">开始上传</button>
                </div>               
            </div>
            <div class="upload-box">
                <div class="upload-button">
                    <form method="post" enctype="multipart/form-data" id="form1">
                      <input id="imageFile" name="imageFile" type="file" multiple="" accept="images/*" @change="changeImage($event)">
                    </form>

                </div>
                <img src="/static/images/article/uploadimg.png" class="lookimg">
                <span class="picName"></span> 
                <img :src="imgsrc" class="picimg" v-show="imgsrc"> 
                <span >{{filename}}</span> 
            </div>
        </div>
        <div class="form-group">
          <label class="control-label">文章内容</label>
           <div class="components-container">
              <div class="editor-container">
                <UE :config=config ref="ue"></UE>
              </div>
            </div>
        </div>

    </div>
</div>
</template>
<style scoped>
@import '../../../static/css/unload.css';
.info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }    
</style>
<script>
import vBread from '@/components/common/bread.vue';
import UE from '@/components/common/ue.vue';
import apiall from "@/api";
export default {
  name: 'unload',
  data () {
    return {
      headCoverSilde:false,
      config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
      },
      filename:'',
      file:'',
      imgsrc:'',
      imagepath:'',
      title:'',
      content:''
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
        },
       changeImage: function(e){
          var _this = this;         
          let file = e.target.files[0];            
          _this.file = file 
          _this.filename =_this.file.name  
          var fReader = new FileReader();
          if (file) {
             var reader = new FileReader();
             reader.readAsDataURL(file)
             reader.onload=function(e){
                 _this.imgsrc = e.target.result;
             } 
        }         
      },
      uploadFile:function(){
          const _this = this;
          console.log(_this.file)
          if(_this.file){
            let formData = new FormData();
            formData.append('imageFile', _this.file);
            _this.$ajax.publish(formData).then((res)=> {
                console.log(res.data.request);
                if(res.data.request == 'success'){
                    alert('你好，你的图片已上传成功')
                    _this.imagepath = apiall.base + '/online/photo/' + _this.filename
                }else{
                    alert('你好，你的图片上传失败')
                }
            });
          }else{
             alert('请选择图片')
          } 
      },
      ArticleUp:function(){
        var _this = this
        console.log(_this.title)
        var _this = this
        _this.content = _this.$refs.ue.getUEContent();
        var params = {
           photo:_this.imagepath,
           title:_this.title,
           content:_this.content
        }
        console.log(params)
        _this.$ajax.updownArticle(params).then((res)=> {
            console.log(res)
        });
      },
    },
    components:{
        vBread,
        UE
    }
}
</script>