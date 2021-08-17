import SmoothScrollbar from "smooth-scrollbar";
import { $ } from './../helpers/selector';

const commonModule = {

    // handle side bar for post-page and question-page
    onHandleScrollSidebar(){
        let smoothScroll = null;
        const main = $('.post__content-box');
        window.onscroll = () => {
            if(window.pageYOffset > main.offsetTop - 30){
                smoothScroll = SmoothScrollbar.init($('.sidebar__content'));
            }else{
                if(smoothScroll) smoothScroll.scrollTop = 0;
                SmoothScrollbar.destroyAll()
            }
        }
    }
}

export default commonModule;