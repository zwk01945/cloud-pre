<template>
    <div class="layout">
        <Layout>
            <!--顶部内容-->
            <Header class="layout-header" :style="{marginLeft:layoutLeftWidth,transition:'margin 0.3s'}">
                <div class="layout-dh">
                    <Icon @click="rangShow" size="25" color="#f6ca9d" type="md-menu" />
                    <AutoComplete
                            v-model="value3"
                            :data="data3"
                            :filter-method="filterMethod"
                            placeholder="input here"
                            style="width:150px;margin-left: 10px">
                    </AutoComplete>
                </div>
                <div class="layout-nav-set">
                    <Dropdown @on-click="dropclick" style="margin-left: 20px">
                        <div>
                            <Icon size="30" style="vertical-align: -.25em!important;" type="md-contact"/>
                            <span>{{this.$store.state.username}}</span>
                        </div>
                        <DropdownMenu slot="list">
                            <DropdownItem name="info">个人信息</DropdownItem>
                            <DropdownItem name="exit">退出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Header>
            <!--中部内容-->
            <Layout :style="{marginLeft:layoutLeftWidth,transition:'margin 0.3s',padding: '64px 0px 0px 0px'}">
                <!--左侧列表-->
<!--                <div class="chouti" >-->
                <Drawer @on-close="closeShow" :mask="false" class-name="chouti" :mask-style="{background:'rgb(0,0,0,0)'}" :transfer="false" :inner="true" :scrollable="true" width="200"  placement="left" :closable="false" v-model="dhShow">
                    <Menu  :style="{height: 'inherit',color:' #515a6e'}" :active-name="active" theme="light"
                          width="auto" :open-names="['3-0']">
                        <router-link :to="{path:'/home/welcome',query:{id:1,name:''}}" class="layout-logo">
                            <img src="../assets/image/logoreal.png">
                        </router-link>
                        <div style="padding-top: 64px;" >
                            <menu-item style="padding-right: 72px;" :to="parseJson(item.routeUrl)" v-for="(item,index) in slider" :key="'1-' + index"
                                       :name="item.categoryName">
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
                                <menu-item :to="parseJson(eachsub.routeUrl)" v-for="(eachsub,keysub) in each" :key="keysub"
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
                            <menu-item :to="parseJson(each1.routeUrl)" v-for="(each1,key1) in item[1]" :key="key1"
                                       :name="each1.categoryName">
                                {{each1.categoryName}}
                            </menu-item>
                        </submenu>
                    </Menu>
                </Drawer>
<!--                </div>-->
                <!--右侧内容-->
                    <Layout :style="{padding: '25px',minHeight: '87vh',maxWidth: '100vw'}">
                        <router-view :key="key"/>
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
        mounted(){
        },
        computed:{
            key(){
                return this.$route.path + Math.random() + new Date().getTime();
            }
        },
        methods: {
            /*初始化左侧列表*/
            init() {
                this.$http.get('/stage/cate?userName='+this.$store.state.username).then(res => {
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
                if (this.dhShow === true) {
                    this.dhShow = false
                    this.layoutLeftWidth = '0px'
                } else {
                    this.dhShow = true
                    this.layoutLeftWidth = '200px'
                }
            },
            closeShow(){
                this.dhShow = false
                this.layoutLeftWidth = '0px'
            },
            dropclick(name){
                if (name === 'exit') {
                    sessionStorage.clear()
                    location.href = '/'
                }
            },
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            parseJson(param){
                return JSON.parse(param)
            }
        },
        data() {
            return {
                layoutLeftWidth:'200px',
                dhShow:true,
                active: '1-2',
                slider: [],
                subSlider: [],
                normalSlider: [],
                value3: '',
                data3: ['哈哈哈'],
                d:{path:'/home/intro',query:{id:1,name:'aa'}}
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
        /*padding: 0px 20px 20px 200px;*/
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
        margin-left: 200px;
    }

    .layout-logo {
        float: left;
        /*margin-left: 2.5vw;*/
        display: inline-block;
        text-align: center;
        color: #fff;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        width: inherit;
        height: 64px;
        line-height: 60px;
        /*border-radius: 50%;*/
        /*background: #182539;*/
    }

    .layout-logo img{
        width: 100%;
        height: 100%;
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
        width: 100px;
        position: fixed;
        right: 30px;
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