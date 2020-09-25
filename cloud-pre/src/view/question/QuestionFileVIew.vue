<template>
    <div :style="{padding: '0px',display:'flex',flexDirection:'row', minHeight: '100vh',marginRight:'180px', background: '#f5f7f9'}">
            <Card  class="layout-category">
                <h2 >三级标题:</h2>
                <div id="sub_title" style="display: flex;flex-wrap: wrap;width: 10vw">
                    <Button class="ivu-tag-size-large"  @click="getInfo()" shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large" @click="getInfo()"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large" @click="getInfo()"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large"  shape="circle" >MVC文件上传</Button>
                    <Button class="ivu-tag-size-large"  shape="circle" >MVC文件上传</Button>
                </div>
            </Card>
        <Card class="layout-quest">
            <div class="layout-quest-title">
                <h1>MVC文件上传</h1>
                <h2 >概述</h2>
                <p>树型选择控件，与 Select 类似，它的可选择数据结构是一个树形结构（Tree）。</p>
                <blockquote>
                    <p>多线程并发上传文件触发。</p>
                </blockquote>
            </div>
            <div id="basic_dm" class="layout-quest-title">
                <h2 >代码</h2>
                <Card>
                <p>树型选择控件，与 Select 类似，它的可选择数据结构是一个树形结构（Tree）。</p>
                <blockquote>
                    <p>该组件支持 Form 校验。</p>
                </blockquote>
                </Card>
            </div>
            <div id="basic_ym" class="layout-quest-title">
                <h2 >源码分析</h2>
                <Card>
                <p>树型选择控件，与 Select 类似，它的可选择数据结构是一个树形结构（Tree）。</p>
                <blockquote>
                    <p>该组件支持 Form 校验。</p>
                </blockquote>
                </Card>
            </div>
            <div id="basic_sv" class="layout-quest-title">
                <h2 >解决方法</h2>
                <Card>
                <p>树型选择控件，与 Select 类似，它的可选择数据结构是一个树形结构（Tree）。</p>
                <blockquote>
                    <p>该组件支持 Form 校验。</p>
                </blockquote>
                </Card>
            </div>
            <AnchorRight :normal-link="normalLink" :group-link="groupLink"/>
        </Card>
    </div>
</template>

<script>
    import AnchorRight from '../../components/AnchorRight.vue'
    export default {
        name: "QuestionFileVIew",
        components:{
            AnchorRight
        },
        mounted() {

        },
        methods:{
            getInfo() {
                console.log('aa')
            }
        },
        data() {
            return{
                otherColor:false,
                ButtonColor:false,
                normalLink:[
                    {
                        title: '概述',
                        href: '#sub_title'
                    },
                    {
                        title: '代码',
                        href: '#basic_dm'
                    },
                    {
                        title: '源码分析',
                        href: '#basic_ym'
                    },
                    {
                        title: '解决方法',
                        href: '#basic_sv'
                    }
                ],
                groupLink:[

                ]
            }
        }
    }
</script>

<style scoped>
    .layout-category{
        /*margin: 35px 0;*/
        display: flex;
        flex-direction: row;
    }
    .layout-category h2{
        width: 8vw;
    }
    .layout-quest{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        padding: 20px;
    }
    .layout-quest-title{
        text-align: left;
        line-height: 2.5;
    }
    .layout-md{
        width: 150px;
        position: fixed;
        top: 90px;
        right: 20px;
        margin: 0!important;
    }

</style>