import * as utils  from '../utils'
export const base = 'http://sxr.luhuiyue.cn';
// export const base = 'http://192.168.1.180';
export default {
	//网站访问人数统计
    base:'http://sxr.luhuiyue.cn',
    // base:'http://192.168.1.180',
    online:params=>{
        return utils.getData(`${base}/online/`,params);
    },
    //文章列表
    articleList:params=>{
        return utils.postData(`${base}/online/article.php`,params);
    },
    //文章详情
    articledetails:params=>{
    	return utils.postData(`${base}/online/articledetails.php`,params);
    },
    //获取点赞数量
    getArticleThumbUpById:params=>{
        return utils.getData(`${base}/online/getArticleThumbUpById.php`,params);
    },
    //点赞
    setArticleThumbUpById:params=>{
        return utils.postData(`${base}/online/setArticleThumbUpById.php`,params);
    },
    //精选文章
    Selectedarticles:params=>{
        return utils.postData(`${base}/online/Selectedarticles.php`,params);
    },
    //上下页文章
    updown:params=>{
        return utils.postData(`${base}/online/updown.php`,params);
    },
    //发布留言
    setmessage:params=>{
        return utils.postData(`${base}/online/setmessage.php`,params);
    },
    //获取留言
    getmessage:params=>{
        return utils.postData(`${base}/online/getmessage.php`,params);
    },
    //上传图片
    publish:params=>{
        return utils.formData(`${base}/online/publish.php`,params);
    },
    //上传文章
    updownArticle:params=>{
        return utils.postData(`${base}/online/updownArticle.php`,params);
    },
}