<template>
    <div class="layout">
        <Layout>
            <!--顶部内容-->
            <Header class="layout-header">
                <router-link to="/" class="layout-logo"/>
                <div class="layout-nav">
                    <menu-item name="1">
                        <Icon type="ios-navigate"></Icon>
                        待添加
                    </menu-item>
                    <menu-item name="2">
                        <Icon type="ios-keypad"></Icon>
                        待添加
                    </menu-item>
                    <menu-item name="3">
                        <Icon type="ios-analytics"></Icon>
                        待添加
                    </menu-item>
                    <menu-item name="4">
                        <Icon type="ios-paper"></Icon>
                        待添加
                    </menu-item>
                </div>
                <div class="layout-nav-set">
                    <menu-item name="5">
                        <Icon size="30" style="vertical-align: -.25em!important;" type="md-contact"/>
                        <span>测试</span>
                    </menu-item>
                </div>
            </Header>
            <!--中部内容-->
            <Layout :style="{padding: '64px 0px 0px 0px'}">
                <!--左侧列表-->
                <div :style="{position: 'fixed',height: '100vh',overflowX:'hidden',width:'200px'}">
                    <div :style="{background: '#1d1e23',height: '93vh',overflowY:'scroll',width:'210px'}">
                        <Menu :style="{height: 'inherit',color:' #ffffffb3'}" :active-name="active" theme="dark"
                              width="auto" :open-names="['3-0']">
                            <div style="padding-left: 10px;padding-bottom: 0;" class="ivu-menu-item">
                                <menu-item :to="item.route" v-for="(item,index) in slider" :key="'1-' + index"
                                           :name="'1-' + index">
                                    <Icon :type="item.icon"></Icon>
                                    <span>{{item.name}}</span>
                                </menu-item>
                            </div>
                            <submenu v-for="(item,index) in subSlider" :key="'2-' + index" :name="'2-' + index">
                                <template slot="title">
                                    <Icon :type="item.icon"></Icon>
                                    <span>{{item.title}}</span>
                                </template>
                                <MenuGroup v-for="(each,key) in item.group" :key="key" :title="each.title">
                                    <menu-item :to="eachsub.route" v-for="(eachsub,keysub) in each.sub" :key="keysub"
                                               :name="eachsub.name">
                                        {{eachsub.name}}
                                    </menu-item>
                                </MenuGroup>
                            </submenu>
                            <submenu v-for="(item,index) in normalSlider" :key="'3-' + index" :name="'3-' + index">
                                <template slot="title">
                                    <Icon :type="item.icon"></Icon>
                                    <span>{{item.title}}</span>
                                </template>
                                <menu-item :to="each1.route" v-for="(each1,key1) in item.sub" :key="key1"
                                           :name="each1.name">
                                    {{each1.name}}
                                </menu-item>
                            </submenu>
                        </Menu>
                    </div>
                </div>
                <!--右侧内容-->
                <Layout :style="{padding: '25px 20px 20px 230px',minHeight: '87vh',maxWidth: '100vw'}">
                    <router-view/>
                    <BackTop></BackTop>
                </Layout>
                <!--底部任务栏-->
                <footer class="ivu-global-footer i-copyright">
                    <div class="ivu-global-footer-links">
                        <a href="https://github.com/" target="_blank" title="Github社区">
                        <!---->
                        Github社区</a> |
                        <a href="https://github.com/zwk01945/spring-cloud" target="_blank" title="项目地址"><!---->
                        项目地址</a></div>
                    <div class="ivu-global-footer-copyright">
                        <div><span>Copyright</span><span> © 2020 Stage个人项目</span>
                        </div>
                    </div>
                </footer>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Layout-home",
        methods: {},
        data() {
            return {
                active: '1-2',
                slider: [
                    {
                        route: '/intro',
                        icon: 'md-information-circle',
                        name: '介绍'
                    },
                    {
                        route: '/intro',
                        icon: 'ios-build',
                        name: '安装'
                    },

                ],
                subSlider: [
                    {
                        icon: 'ios-notifications',
                        title: '技术架构',
                        group: [
                            {
                                title: 'NACOS',
                                sub: [
                                    {
                                        route: '/intro',
                                        name: 'NACOS搭建'
                                    },
                                    {
                                        route: '/intro',
                                        name: 'NACOS集群搭建'
                                    },
                                    {
                                        route: '/intro',
                                        name: 'Seata分布式事务'
                                    },
                                    {
                                        route: '/intro',
                                        name: 'Gateway路由网关'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                normalSlider: [
                    {
                        icon: 'ios-checkbox',
                        title: '常见问题',
                        sub: [
                            {
                                route: '/question',
                                name: '文件相关'
                            },
                            {
                                route: '/question',
                                name: '其他'
                            }
                        ]
                    },
                    {
                        icon: 'ios-cog',
                        title: '系统设置',
                        sub: [
                            {
                                route: '/intro',
                                name: '修改密码'
                            },
                            {
                                route: '/intro',
                                name: '重新拉取'
                            },
                            {
                                route: '/intro',
                                name: '个人信息'
                            }
                        ]
                    },
                    {
                        icon: 'md-information-circle',
                        title: '安全设置',
                        sub: [
                            {
                                route: '/intro',
                                name: '网络配置'
                            },
                            {
                                route: '/intro',
                                name: '路由信息'
                            }
                        ]
                    },
                    {
                        icon: 'md-grid',
                        title: '通用设置',
                        sub: [
                            {
                                route: '/intro',
                                name: '用户管理'
                            },
                            {
                                route: '/intro',
                                name: '权限管理'
                            },
                            {
                                route: '/intro',
                                name: '其他管理'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .ivu-global-footer-links a{
        margin-left: 20px;
        margin-right: 20px;
    }
    .ivu-global-footer {
        padding: 0px 20px 20px 230px;
        min-height: 6vh;
        max-width: 100vw;
        text-align: center;
    }
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-header {
        position: fixed;
        width: 100%;
        background: linear-gradient(90deg, #1d1e23, #3f4045);;
        z-index: 999;
    }

    .layout-logo {
        width: 100px;
        height: 65px;
        background: url("../assets/image/logoreal.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 3px;
        float: left;
        margin-left: 2vw;
    }

    .layout-nav {
        display: flex;
        flex-direction: row;
        width: 420px;
        margin: 0 0 0 80px;
        float: left;
        justify-content: space-around;
        color: #f6ca9d;
    }

    .layout-nav-set {
        display: flex;
        flex-direction: row;
        width: 100px;
        margin: 0 30px;
        float: right;
        justify-content: space-around;
        color: #f6ca9d;
    }

    .i-layout-menu-side-title-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 21px;
        vertical-align: middle;
        text-align: center;
        margin-right: 8px;
    }

    .i-layout-menu-side-title {
        display: inline-block;
    }
</style>