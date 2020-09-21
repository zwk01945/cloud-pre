const routers = [
    {
        path: '/',
        meta: {
            title: '欢迎进入STAGE系统'
        },
        children: [
        ],
        component: (resolve) => require(['../components/Welcome.vue'], resolve)
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
];
export default routers;