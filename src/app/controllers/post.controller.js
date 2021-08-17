
class PostController{
    renderPostPage(req,res){
        res.render('post',{
            title : 'Bài viết - DevSkill',
            stickyHeader : true,
            page : {
                isPostPage : true
            }
        })
    }
    renderPostDetailPage(req,res){
        res.render('post-detail',{
            title : 'Chi tiết bài viết - DevSkill',
            stickyHeader : true
        })
    }
}


export default new PostController();