Page({
    data: {
        supermarketName: "测试商家名字",
        sideMenu: [
            "全部",
            "生鲜果蔬",
            "休闲零食",
            "酒水饮料",
            "粮油副食",
            "家庭清洁",
            "美妆个护",
            "生鲜果蔬",
            "休闲零食",
            "酒水饮料",
            "粮油副食",
            "家庭清洁",
            "美妆个护",
            "其他"
        ],
        active: 0,
        currentIndex: 0
    },
    onLoad: function (options) {

    },
    onChange(event) {
        wx.showToast({
            title: `切换到标签 ${event.detail.name}`,
            icon: 'none',
        });
    },
    // onChangeSide(e) {
    //     const sideMenu = document.querySelectorAll('.side-item')
    //     console.log(sideMenu, 123)
    // }
    handleSideMenuItemTap(event) {
        const index = event.currentTarget.dataset.index;
        console.log(index, 12321)
        this.setData({
            currentIndex: index
        });
    },
    handleCategoryControlTap(){
        wx.navigateTo({
            url: '/pages/category/category'
        })
    },
    handleProductControlTap(){
        wx.navigateTo({
            url: '/pages/ManageProduct/ManageProduct'
        })
    }
});
