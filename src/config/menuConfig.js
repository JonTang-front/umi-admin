export default [
    {
        title: '首页',
        key: '/home',
        icon: 'home',
        isLevel: true
    },
    {
        title: 'UI',
        key: '/ui',
        icon: 'underline',
        isLevel: false,
        children: [
            {
                title: '表格',
                key: '/ui/table',
                isLevel: true
            },
            {
                title: '表单',
                key: '/ui/form',
                isLevel: true
            },
            {
                title: '弹框',
                key: '/ui/modal',
                isLevel: true
            }
        ]
    },
    {
        title: '城市管理',
        key: '/city',
        icon: 'area-chart',
        isLevel: true
    },
    {
        title: '订单管理',
        key: '/order',
        icon: 'file-text',
        isLevel: true
    },
    {
        title: '员工管理',
        key: '/user',
        icon: 'user',
        isLevel: true
    },
    {
        title: '车辆地图',
        key: '/map',
        icon: 'alibaba',
        isLevel: true
    },
    {
        title: '权限设置',
        key: '/config',
        icon: 'setting',
        isLevel: true
    }
]