<template>
    <div class="layout">
        <Layout>
            <!--顶部内容-->
            <Header class="layout-header">
                <div class="layout-dh">
                    <Icon @click="rangShow" size="25" color="#f6ca9d" type="md-menu" />
                </div>
                <div class="layout-logo"/>
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
<!--                <div class="chouti" >-->
                <Drawer class-name="chouti" :transfer="false" :inner="true" :scrollable="true" width="200"  placement="left" :closable="false" v-model="dhShow">
                    <Menu @on-select="rangShow" :style="{height: 'inherit',color:' #515a6e'}" :active-name="active" theme="light"
                          width="auto" :open-names="['3-0']">
                        <div style="padding-bottom: 0;" >
                            <menu-item style="padding-right: 72px;" :to="item.routeUrl" v-for="(item,index) in slider" :key="'1-' + index"
                                       :name="'1-' + index">
                                <Icon :type="item.routeIcon"></Icon>
                                <span>{{item.categoryName}}</span>
                            </menu-item>
                        </div>
                        <submenu v-for="(item,index) in subSlider" :key="'2-' + index" :name="'2-' + index">
                            <template slot="title">
                                <span> <Icon :type="item[0]"></Icon></span>
                                <span>{{item[1]}}</span>
                            </template>
                            <MenuGroup v-for="(each,key) in item[2]" :key="key" :title="key">
                                <menu-item :to="eachsub.routeUrl" v-for="(eachsub,keysub) in each" :key="keysub"
                                           :name="eachsub.categoryName">
                                    {{eachsub.categoryName}}
                                </menu-item>
                            </MenuGroup>
                        </submenu>
                        <submenu v-for="(item,index) in normalSlider" :key="'3-' + index" :name="'3-' + index">
                            <template slot="title">
                                <Icon :type="item[2]"></Icon>
                                <span>{{item[0]}}</span>
                            </template>
                            <menu-item :to="each1.routeUrl" v-for="(each1,key1) in item[1]" :key="key1"
                                       :name="each1.categoryName">
                                {{each1.categoryName}}
                            </menu-item>
                        </submenu>
                    </Menu>
                </Drawer>
<!--                </div>-->
                <!--右侧内容-->
                <Layout :style="{padding: '25px',minHeight: '87vh',maxWidth: '100vw'}">
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
        created:function(){
            this.init()
        },
        methods: {
            /*初始化左侧列表*/
            init() {
                this.$http.get('/stage/cate?userName=TEST').then(res => {
                    var slider = res.data.data
                    if (res.data.code === 0) {
                        let entry = Object.entries(slider)
                        entry.forEach((item) => {
                            if (item[0] === '单个') {
                                this.slider = item[1]
                            } else if (item[1].length > 1) {
                                //normalSlider
                                this.normalSlider.unshift(item)
                                this.normalSlider.forEach((x) => {
                                    x[1].forEach((x1,index) => {
                                        if (typeof x1 === 'string') {
                                            x[1].splice(index,1)
                                            x.push(x1)
                                        }
                                    })
                                })
                            } else {
                                //subSlider
                                this.subSlider.unshift(item)
                                this.subSlider[0].unshift(this.subSlider[0][1]["icon"])
                                delete this.subSlider[0][2].icon
                            }
                        })
                    }

                })
            },
            rangShow:function () {
                if(this.dhShow === true) {
                    this.dhShow = false
                } else {
                    this.dhShow = true
                }
            }
        },
        data() {
            return {
                dhShow:sessionStorage.setItem("dh",false),
                active: '1-2',
                slider: [],
                subSlider: [],
                normalSlider: []
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
        background: linear-gradient(to right, #141e30, #243b55); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        z-index: 1999;
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

    .layout-dh {
        margin: 0 20px 0 20px;
        float: left;
        color: #f6ca9d;
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