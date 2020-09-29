<template>
    <Card class="layout-build">
        <h1>{{title}}</h1>
        <div v-for="(item,index) in nodes" :key="index" class="layout-build-title">
            <pre v-highlightjs>
             <h2>{{index+1 + '.' + item.contentTitle}}</h2>
                <p v-if="item.contentSubTitle !== null && item.contentSubTitle !== ''">{{item.contentSubTitle.trim()}}</p>
             <code v-if="item.contentCode !== null && item.contentCode !== ''" class="html" style="text-align:left;background: #303133">
                 {{item.contentCode}}
             </code>
            </pre>
            <img style="width: 100%" v-if="item.contentCode === null" :src="item.contentImage">
           <div v-if="item.remark !== null && item.remark !== ''">
               <h2>备注</h2>
               <p>{{item.remark}}</p>
           </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "ProjectFreamWork",
        data() {
            return {
                title:this.$route.query.name,
                nodes:[]
            }
        },
        mounted() {
           this.refresh(this.$route.query.id)
        },
        methods:{
            refresh (id) {
                this.$http.get('/stage/content?cateid=' + id).then(res => {
                    this.nodes = []
                    this.nodes = res.data.data
                })
            }
        },
        watch: {
            $route:{
                handler(val, oldVal){
                    if(val.query.id !== oldVal.query.id){
                        this.title = val.query.name
                        this.refresh(val.query.id)
                    }
                },
                deep:true //深度监听
            }

        }
    }
</script>

<style scoped>
    .layout-build{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        padding: 20px;
    }
    .layout-build-title{
        text-align: left;
        line-height: 1.5;
    }
</style>