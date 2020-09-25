const routers = [
    {
        path: '/',
        meta: {
            title: 'STAGE系统',
            isRefresh: true
        },
        children: [
        ],
        component: (resolve) => require(['../view/LoginPage.vue'], resolve)
        // Layout-home.vue
    },
    {
        path: '/home',
        meta: {
            title: '欢迎进入STAGE系统'
        },
        children: [
            {
                path: 'welcome',
                meta: {
                    title: '欢迎进入STAGE系统'
                },
                children: [
                ],
                component: (resolve) => require(['../components/Welcome.vue'], resolve)
                // Layout-home.vue
            },
            {
                path: '/intro',
                meta: {
                    title: '介绍'
                },
                component: (resolve) => require(['../view/ProjectIntro.vue'], resolve)
            },
            {
                path: '/question',
                meta: {
                    title: '文件相关'
                },
                component: (resolve) => require(['../view/question/QuestionFileVIew.vue'], resolve)
            }
        ],
        component: (resolve) => require(['../components/Layout-home.vue'], resolve)
    }
];
export default routers;