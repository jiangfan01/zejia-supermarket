Page({
    data: {
        supermarket: {
            name: '测试商家超市名字',
            image: '/images/test.jpg'
        },
        goodsList: [
            {
                id: 1,
                name: "维他豆奶",
                price: 13.98,
                image: '/images/test.jpg'
            },
            {
                id: 2,
                name: "苹果",
                price: 9.98,
                image: '/images/test.jpg'
            },
            {
                id: 3,
                name: "香蕉",
                price: 5.98,
                image: '/images/test.jpg'
            },
            {
                id: 4,
                name: "牛奶",
                price: 8.99,
                image: '/images/test.jpg'
            }
        ]
    },
    onLoad: function (options) {
        const app = getApp();
        this.setData({filteredList: this.data.productList}); // 初始化显示所有商品
        // 设置全局位置和地址数据
        if (app.globalData.location && app.globalData.address) {
            this.setData({
                location: app.globalData.location,
                address: app.globalData.address
            });
        } else {
            app.globalData.locationReadyCallback = (location, address) => {
                this.setData({location: location, address: address});
            };
        }
    }
});