export default [
    {
        title: '首页',
        path: '/home',
        icon: 'icon-home',
        component: '/home',
        isLevel: true
    },
    {
        title: '数据分析',
        path: '/chart',
        icon: 'icon-chart',
        component: '/chart',
        isLevel: true
    },
    {
        title: '产品管理',
        path: '/product',
        icon: 'icon-product',
        component: '/product',
        isLevel: false,
        routes: [
            {
                title: '商品管理',
                path: '/product/goods',
                component: '/product/goods',
                isLevel: true
            },
            {
                title: '分类管理',
                path: '/product/sort',
                component: '/product/sort',
                isLevel: true
            },
            {
                title: '评论管理',
                path: '/product/comment',
                component: '/product/comment',
                isLevel: true
            }
        ]
    },
    {
        title: '订单管理',
        path: '/order',
        icon: 'icon-order',
        component: '/order',
        isLevel: false,
        routes: [
            {
                title: '订单列表',
                path: '/order/list',
                component: '/order/list',
                isLevel: true
            },
            {
                title: '待发货',
                path: '/order/undelivered',
                component: '/order/undelivered',
                isLevel: true
            },
            {
                title: '待退款',
                path: '/order/unrefund',
                component: '/order/unrefund',
                isLevel: true
            }
        ]
    },
    {
        title: '卡券管理',
        path: '/ticket',
        icon: 'icon-ticket',
        component: '/ticket',
        isLevel: false,
        routes: [
            {
                title: '优惠券',
                path: '/ticket/discount',
                component: '/ticket/discount',
                isLevel: true
            },
            {
                title: '限时券',
                path: '/ticket/limit',
                component: '/ticket/limit',
                isLevel: true
            },
            {
                title: '新人券',
                path: '/ticket/customer',
                component: '/ticket/customer',
                isLevel: true
            },
            {
                title: '兑换码',
                path: '/ticket/code',
                component: '/ticket/code',
                isLevel: true
            }
        ]
    },
    {
        title: '用户管理',
        path: '/user',
        icon: 'icon-user',
        component: '/user',
        isLevel: false,
        routes: [
            {
                title: '个人中心',
                path: '/user/personal',
                component: '/user/personal',
                isLevel: true
            },
            {
                title: '用户列表',
                path: '/user/list',
                component: '/user/list',
                isLevel: true
            },
            {
                title: '意见反馈',
                path: '/user/feedback',
                component: '/user/feedback',
                isLevel: true
            }
        ]
    },
    {
        title: '权限设置',
        path: '/config',
        icon: 'icon-setting',
        component: '/config',
        isLevel: true
    }
]