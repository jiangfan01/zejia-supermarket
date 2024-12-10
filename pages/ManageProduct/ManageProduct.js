// pages/product/product.js
Page({
    data: {
        currentTab: 0, // 当前Tab：0表示销售中，1表示已下架
        categoryList: ['生鲜果蔬', '休闲零食', '酒水饮料', '粮油副食', '家庭清洁', '美妆个护'],
        products: [
            { id: 1, name: '苹果', category: '生鲜果蔬', status: 'active' },
            { id: 2, name: '薯片', category: '休闲零食', status: 'inactive' },
            { id: 3, name: '可乐', category: '酒水饮料', status: 'active' },
            { id: 4, name: '大米', category: '粮油副食', status: 'inactive' },
        ],
        selectedCategory: null, // 当前选择的分类
    },

    // 切换Tab
    handleTabChange: function(e) {
        this.setData({ currentTab: e.detail.index });
    },

    // 处理分类点击
    handleCategoryChange: function(e) {
        const category = e.currentTarget.dataset.category;
        this.setData({ selectedCategory: category });
    },

    // 根据分类筛选商品
    getFilteredProducts: function() {
        const { products, selectedCategory, currentTab } = this.data;
        return products.filter(product => {
            const isStatusMatch = currentTab === 0 ? product.status === 'active' : product.status === 'inactive';
            const isCategoryMatch = selectedCategory ? product.category === selectedCategory : true;
            return isStatusMatch && isCategoryMatch;
        });
    },

    // 添加商品
    handleAddProduct: function() {
        wx.navigateTo({
            url: '/pages/add-product/add-product', // 跳转到添加商品页面
        });
    },

    // 编辑商品
    handleEditProduct: function(e) {
        const productId = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/edit-product/edit-product?id=${productId}`, // 跳转到编辑商品页面
        });
    },

    // 删除商品
    handleDeleteProduct: function(e) {
        const productId = e.currentTarget.dataset.id;
        wx.showModal({
            title: '删除商品',
            content: '确定删除此商品吗？',
            success: (res) => {
                if (res.confirm) {
                    this.setData({
                        products: this.data.products.filter(product => product.id !== productId),
                    });
                    wx.showToast({ title: '商品已删除', icon: 'success' });
                }
            },
        });
    },

    // 监听页面加载时获取筛选后的商品列表
    onLoad: function() {
        this.setData({
            filteredProducts: this.getFilteredProducts(),
        });
    },

    // 监听页面数据变化时更新商品列表
    onShow: function() {
        this.setData({
            filteredProducts: this.getFilteredProducts(),
        });
    },
});
