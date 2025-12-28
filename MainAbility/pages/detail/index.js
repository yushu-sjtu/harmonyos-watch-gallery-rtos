import router from '@system.router';
import brightness from '@system.brightness';

export default {
    data: {
        clickedIndex: 0,
        currentIndex: 0,
        imageList: []
    },

    onInit() {
        this.generateHighResImages();
        this.currentIndex = parseInt(this.clickedIndex);
    },

    generateHighResImages() {
        const totalImages = 15;
        let images = [];
        for (let i = 1; i <= totalImages; i++) {
            images.push('/common/' + i + '.jpg');
        }
        this.imageList = images;
    },

    // 【关键】监听 Swiper 切换事件
    onSwipeChange(e) {
        // 更新当前索引，这将触发 HML 中的 if 判断重新计算
        this.currentIndex = e.index;
    },

    onShow() {
        this.setScreenKeepOn(true);
    },

    onDestroy() {
        this.setScreenKeepOn(false);
    },

    setScreenKeepOn(isOn) {
        if (brightness && brightness.setKeepScreenOn) {
            brightness.setKeepScreenOn({ keepScreenOn: isOn });
        }
    },

    goBack() {
        router.replace({ uri: 'pages/index/index' });
    }
};