export default [
    {
        title: '首页',
        path: '/home',
        icon: 'home',
        component: '/home',
        isLevel: true
    },
    {
        title: '数据分析',
        path: '/chart',
        icon: 'area-chart',
        component: '/chart',
        isLevel: true
    },
    {
        title: '产品管理',
        path: '/product',
        icon: 'area-chart',
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
        icon: 'file-text',
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
        title: '员工管理',
        path: '/user',
        icon: 'user',
        component: '/user',
        isLevel: true
    },
    {
        title: '车辆地图',
        path: '/map',
        icon: 'alibaba',
        component: '/map',
        isLevel: true
    },
    {
        title: '权限设置',
        path: '/config',
        icon: 'setting',
        component: '/config',
        isLevel: true
    }
]