
class SiteController {
    renderHomePage(req,res){
        res.render('homepage',{ title : 'Trang chủ - DevSkill'});
    }
    renderLoginPage(req,res){
        res.render('login',
            { 
                title : 'Đăng nhập',
                stickyHeader : true,
                page : {
                    isLoginpage : true
                }
            }
        );
    }
    renderRegisterPage(req,res){
        res.render('register',
            {
                title : 'Đăng ký',
                stickyHeader : true,
                // hightline text 
                page : {
                    isRegisterpage : true
                }
            });
    }
}

export default new SiteController();