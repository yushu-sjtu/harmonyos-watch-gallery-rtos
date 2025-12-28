import router from '@system.router';

export default {
    data: {
        allImages: [],
        gridPages: [],
        // 记录当前垂直滚动到了第几页
        currentPage: 0
    },

    onInit() {
        this.generateImages();
        this.chunkImages();
    },

    // 监听垂直翻页
    onPageChange(e) {
        this.currentPage = e.index;
    },

    generateImages() {
        const totalImages = 15;
        let images = [];
        for (let i = 1; i <= totalImages; i++) {
            images.push({
                thumb: '/thumb/' + i + '.jpg',
                src: '/common/' + i + '.jpg'
            });
        }
        this.allImages = images;
    },

    chunkImages() {
        const pageSize = 9;
        let pages = [];
        for (let i = 0; i < this.allImages.length; i += pageSize) {
            pages.push(this.allImages.slice(i, i + pageSize));
        }
        this.gridPages = pages;
    },

    openDetail(pageIndex, innerIndex) {
        let globalIndex = (pageIndex * 9) + innerIndex;
        router.replace({
            uri: 'pages/detail/index',
            params: { clickedIndex: globalIndex }
        });
    }
};