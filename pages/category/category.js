Page({
    data: {
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
        isModalVisible: false, // 控制新增/编辑弹窗显示
        modalTitle: '新增分类', // 弹窗标题
        newCategoryName: '', // 存储输入框的值
        editingIndex: -1, // 用于存储编辑时的分类索引
    },

    // 新增分类弹窗
    showAddModal() {
        this.setData({
            isModalVisible: true,
            modalTitle: '新增分类',
            newCategoryName: '', // 清空输入框
            editingIndex: -1, // 清空编辑索引
        });
    },

    // 编辑分类
    editCategory(e) {
        const index = e.currentTarget.dataset.index;
        const category = this.data.sideMenu[index];
        this.setData({
            isModalVisible: true,
            modalTitle: '编辑分类',
            newCategoryName: category, // 显示该分类的名称
            editingIndex: index, // 设置编辑的索引
        });
    },

    // 删除分类
    deleteCategory(e) {
        const index = e.currentTarget.dataset.index;
        wx.showModal({
            content: '确定删除该分类吗？',
            success: (res) => {
                if (res.confirm) {
                    // 如果分类中还有商品基于提示
                    wx.showModal({
                        content: '该分类下还有商品，请先删除商品后再删除该分类。',
                    });
                    return;

                    const sideMenu = this.data.sideMenu;
                    sideMenu.splice(index, 1); // 删除该分类
                    this.setData({
                        sideMenu,
                    });
                    // 这里可以调用接口同步到后台


                }
            },
        })
        // const sideMenu = this.data.sideMenu;
        // sideMenu.splice(index, 1); // 删除该分类
        // this.setData({
        //     sideMenu,
        // });
        // 这里可以调用接口同步到后台
    },

    // 确认新增或编辑分类
    confirmModal() {
        const {newCategoryName, editingIndex, sideMenu} = this.data;

        if (!newCategoryName.trim()) {
            wx.showToast({
                title: '分类名称不能为空',
                icon: 'none',
            });
            return;
        }

        if (editingIndex === -1) {
            // 新增
            sideMenu.push(newCategoryName);
        } else {
            // 编辑
            sideMenu[editingIndex] = newCategoryName;
        }

        this.setData({
            sideMenu,
            isModalVisible: false,
        });

        // 可以在这里调用接口同步数据到后台
    },

    // 取消新增/编辑
    cancelModal() {
        this.setData({
            isModalVisible: false,
        });
    },

    // 输入框变化
    onInputChange(e) {
        this.setData({
            newCategoryName: e.detail.value,
        });
    },
});
