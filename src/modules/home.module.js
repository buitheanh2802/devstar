import { $ } from '../helpers/selector';
import { onHandleCanvas } from '../helpers/canvas';

const rootModule = {
    // render jsx
    onRender() {
        
    },
    // init function
    onInit() {
        // run canvas in untils
        onHandleCanvas();
        // fixed header when scroll top
        this.onFixedHeaderScrollTop();
    },
    onFixedHeaderScrollTop() {
        const header = $('.header__box');
        const banner = $('.banner__content');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > banner.offsetTop / 2 - 100) {
                header.classList.add('header__active-scroll')
            } else header.classList.remove('header__active-scroll')
        })
    }
}

rootModule.onInit();
rootModule.onRender();
