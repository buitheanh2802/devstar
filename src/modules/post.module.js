import commonModule from "./common";
const rootModule = {
    onRender(){

    },
    onInit(){
        commonModule.onHandleScrollSidebar();
    }
}


rootModule.onRender();
rootModule.onInit();