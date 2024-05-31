import { AppstoreOutlined } from '@ant-design/icons'
/**
 * 侧边栏菜单
 */
export const menuItems = [
    {
        key: 'sys',
        label: '订单管理',
        icon: <AppstoreOutlined />,
        children: [
            { key: 'sys/menu', label: '客户管理', icon: <AppstoreOutlined /> },
            { key: 'sys/role', label: '运单管理', icon: <AppstoreOutlined /> },
            { key: 'sys/user', label: '货主管理', icon: <AppstoreOutlined /> },
        ],
    },
    {
        key: 'shop',
        label: '货车系统',
        icon: <AppstoreOutlined />,
        children: [
            { key: 'shop/banner', label: 'banner', icon: <AppstoreOutlined /> },
            {
                key: 'shop/category',
                label: '商品分类',
                icon: <AppstoreOutlined />,
            },
            {
                key: 'shop/goods',
                label: '司机管理',
                icon: <AppstoreOutlined />,
            },
            {
                key: 'shop/order',
                label: '订单管理',
                icon: <AppstoreOutlined />,
            },
        ],
    },
    {
        key: 'oa',
        label: 'OA办公系统',
        icon: <AppstoreOutlined />,
        children: [
            { key: 'oa/list', label: '回复管理', icon: <AppstoreOutlined /> },
            { key: 'oa/lg', label: '日志管理', icon: <AppstoreOutlined /> },
            { key: 'oa/reply', label: '日志回复', icon: <AppstoreOutlined /> },
        ],
    },
]
