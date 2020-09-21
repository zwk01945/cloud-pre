<template>
    <Card :style="{padding: '0px', minHeight: '100vh',marginRight:'180px', background: '#fff'}">
        <div class="layout-intro">
            <div id="basic_title" class="layout-title">
                <img src="../assets/image/logo.png">
                <h1>前后端分离分布式架构集群化项目</h1>
            </div>
            <div class="layout-img">
                <div style="text-align:center;">
                    <img src="../assets/image/cloud.png">
                </div>
                <div style="text-align:center;">
                    <img src="../assets/image/module.png">
                </div>
                <div style="text-align:center;">
                    <img src="../assets/image/common.png">
                </div>
            </div>
            <div class="layout-content">
                <h3>关于 Stage（前后端 分布式 集群）</h3>
                <p><strong>Stage（前后端 分布式 集群）</strong>
                    是一套学习使用的前后端分布式项目，它基于
                    <strong>View UI（iView）和 Vue.js</strong>
                    ，以及 <strong>Spring Cloud Alibaba等一系列组件</strong>。
                </p>
                <h3 id="basic_usage">项目特点</h3>
                <ul>
                    <li>分布式集群高可用系统稳定性高；</li>
                    <li>前后端分模块分离开发高效开发；</li>
                    <li>支持路由跳转以及全局路由守卫；</li>
                    <li>全响应式支持，所有页面及功能点对 PC 端、移动端、平板电脑均有不同的显示效果；</li>
                    <li>漂亮的 UI、极致的用户体验和细节处理；</li>
                    <li>有比较全的文档。</li>
                </ul>
                <h3 id="static_position">项目功能</h3>
                <ul>
                    <li id="cloud">
                        后端
                        <ul>
                            <li>注册中心Nacos搭配Nginx集群化部署；</li>
                            <li>提供Nacos配置中心管理和下发配置；</li>
                            <li>持久化Nacos配置中心到数据库；</li>
                            <li>使用Seata分布式事务进行全局事务；</li>
                            <li>Redis集群缓存处理，AOP注解实现Redis缓存；</li>
                            <li>全局异常、拦截和项目公共Utils(FTP,HTTP,FILE,DATE,REDIS等)集成；</li>
                            <li>使用Gateway作为网关进行限流、鉴权、转发、过滤操作；</li>
                            <li>使用Nginx做负载均衡；</li>
                            <li>优质的售后技术支持，完善的文档。</li>
                        </ul>
                    </li>
                    <li id="pre">
                        前端
                        <ul>
                            <li>路由组件和引用组件整合开发；</li>
                            <li>支持全局路由守卫拦截处理；</li>
                            <li>全响应式支持，所有页面及功能点对 PC 端、移动端、平板电脑均有不同的显示效果；</li>
                            <li>漂亮的 UI、极致的用户体验和细节处理；</li>
                            <li>优质的售后技术支持，完善的文档。</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <AnchorRight :normal-link="normalLink" :group-link="groupLink"/>
        </div>
    </Card>
</template>
<script>
    import AnchorRight from '../components/AnchorRight.vue'
    export default {
        name: "Intro",
        components:{
            AnchorRight
        },
        data() {
            return{
                normalLink:[
                    {
                        title: '标题',
                        href: '#basic_title'
                    },
                    {
                        title: '项目特点',
                        href: '#basic_usage'
                    }
                ],
                groupLink:[
                    {
                        groupTitle:'项目功能',
                        groupHref:'#static_position',
                        sub:[
                            {
                                title: '前 端',
                                href: '#pre'
                            },
                            {
                                title: '后 端',
                                href: '#cloud'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .layout-title{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .layout-title img{
        width: 15vh;
        height: 15vh;
        margin-bottom: 8vh;
    }
    /*.layout-md{*/
    /*    width: 150px;*/
    /*    position: fixed;*/
    /*    top: 90px;*/
    /*    right: 20px;*/
    /*    margin: 0!important;*/
    /*}*/
    .layout-intro{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
    }
    .layout-intro div {
        margin: 30px;
    }
    .layout-img{
        display: flex;
        flex-direction: row;
        width: 90%;
    }
    .layout-img img{
        width: 100%;
        height: 100%;
    }
    .layout-content {
        font-size: 14px;
        color: #515a6e;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 95%;
    }
    .layout-content h1, .layout-content h2, .layout-content h3, .layout-content h4, .layout-content h5, .layout-content h6 {
        font-weight: 700;
        margin: 1em 0;
        color: #17233d;
    }
    .layout-content ul {
        margin-left: 1.5em;
        margin-top: 0;
        margin-bottom: .72em;
        text-align: left;
    }
</style>