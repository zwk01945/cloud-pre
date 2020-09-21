<template>
    <div class="layout-welcome">
        <div id="basic_title" class="layout-title">
            <img src="../assets/image/logo.png">
        </div>
<!--        <h3>欢迎进入</h3>-->
        <h1>前后端分离分布式架构集群化项目</h1>
        <h3>{{new Date()}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        mounted: function () {
            this.$Notice.config({
                top: 80,
                duration: 5
            });
            this.renderFunc('欢迎登陆','当前版本记录如下: ')
        },
        methods:{
            renderFunc (titleName,description) {
                this.$Notice.success({
                    title: titleName,
                    desc: description,
                    render: h => {
                        return h('Timeline', [
                            <Timeline>
                                <TimelineItem color="green">发布1.0版本</TimelineItem>
                                <TimelineItem color="green">发布2.0版本</TimelineItem>
                                <TimelineItem color="red">严重故障</TimelineItem>
                                <TimelineItem color="blue">发布3.0版本</TimelineItem>
                            </Timeline>
                        ])
                    }
                });
            }
        }
    }
</script>

<style scoped>
.layout-welcome{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    line-height: 5;
    margin-top: 50px;
}
.layout-welcome div {
    margin: 30px;
}
</style>