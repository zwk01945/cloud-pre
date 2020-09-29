<template>
    <div class="layout-welcome">
<!--        <div id="basic_title" class="layout-title">-->
<!--            <img src="../assets/image/logo.png">-->
<!--            &lt;!&ndash;        <h3>欢迎进入</h3>&ndash;&gt;-->
<!--            <h3>前后端分离分布式架构集群化项目</h3>-->
<!--            <h3>{{new Date()}}</h3>-->
<!--        </div>-->

       <Card :padding="0" style="width: 100%">
           <List>
               <span style="display: flex;"><h2>工作台</h2></span>
               <ListItem>
                   <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                                 :title="title"
                                 :description="desc" />
                   <template slot="action">
                       <li>
                           <Icon type="ios-star-outline" /> 123
                       </li>
                       <li>
                           <Icon type="ios-thumbs-up-outline" /> 234
                       </li>
                       <li>
                           <Icon type="ios-chatbubbles-outline" /> 345
                       </li>
                   </template>
               </ListItem>
           </List>
       </Card>
       <div class="layout-welcome-content">
           <Card class="layout-title" style="border-top: 2px solid #2b85e4;">
                   <div class="layout-title-content">
                       <Icon type="md-list-box" />
                       <span>5/项<br/><h5>新增功能</h5>
                   </span>
                   </div>
           </Card>
           <Card class="layout-title" style="border-top: 2px solid #f90;">
               <div class="layout-title-content">
                   <Icon type="ios-people" />
                   <span>20/项<br/><h5>新增用户</h5>
                   </span>
               </div>
           </Card>
           <Card class="layout-title" style="border-top: 2px solid #ed4014;font-size: 38px;">
               <div class="layout-title-content">
                   <Icon type="ios-chatboxes" />
                   <span>20/项<br/><h5>待办工作</h5>
                   </span>
               </div>
           </Card>
           <Card class="layout-title" style="border-top: 2px solid #515a6e">
               <div class="layout-title-content">
                   <Icon type="md-clipboard" />
                   <span>20/项<br/><h5>未完成工作</h5>
                   </span>
               </div>
           </Card>
       </div>

        <div style="display: flex;flex-direction: row;justify-content: space-around">
            <el-calendar v-model="calendar">
            </el-calendar>
            <div id="chartsContainer" style="width: 65%;background-color: #fff;">

            </div>

        </div>

        <div style="width: inherit;background-color: #fff;">
            <h3>最新代办事项</h3>
            <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data() {
            return {
                calendar:new Date(),
                title:'管理员 :' + this.$store.state.username + '开始管理您的工作把',
                weathersinfo: {
                    AP:'',
                    SD:'',
                    WD:'',
                    city:'',
                    temp:''
                },
                desc:'',
                tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Status',
                        key: 'status',
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status === 1 ? 'primary' : row.status === 2 ? 'success' : 'error';
                            const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: 'Portrayal',
                        key: 'portrayal',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.portrayal.length + 'portrayals',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.portrayal.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].portrayal.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item)
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'People',
                        key: 'people',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.people.length + 'customers',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.people.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].people.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item.n + '：' + item.c + 'People')
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'Sampling Time',
                        key: 'time',
                        render: (h, params) => {
                            return h('div', 'Almost' + params.row.time + 'days');
                        }
                    },
                    {
                        title: 'Updated Time',
                        key: 'update',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
                    }
                ]
            }
        },
        mounted: function () {
            this.$Notice.config({
                top: 80,
                duration: 5
            });
            this.renderFunc('欢迎登陆','当前版本记录如下: ')
            this.weatherInfo()
            this.charts()
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
            },
            weatherInfo() {
                this.$http.get('http://192.168.2.157:5002/weather'
                ).then(res => {
                    const obj = res.data.weatherinfo
                    this.weathersinfo.AP = obj.AP
                    this.weathersinfo.SD = obj.SD
                    this.weathersinfo.WD = obj.WD + ': ' + obj.WS
                    this.weathersinfo.city = obj.city
                    this.weathersinfo.temp = obj.temp
                    this.desc ='城市:'+this.weathersinfo.city + '压强:'+ this.weathersinfo.AP + '湿度:'+this.weathersinfo.SD
                    +'风力:'+this.weathersinfo.WD + '温度:'+this.weathersinfo.temp
                })
            },
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'Business' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
                        people: [
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            }
                        ],
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
                this.tableData1 = this.mockTableData1();
            },
            charts() {
                var Highcharts = require('highcharts');

                // 在 Highcharts 加载之后加载功能模块
                require('highcharts/modules/exporting')(Highcharts);
                // 创建图表
                Highcharts.chart('chartsContainer', {
                    /*Highcharts 配置*/
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: '月学习进度'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: {
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    yAxis: {
                        title: {
                            text: '数量 (个)'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                // 开启数据标签
                                enabled: true
                            },
                            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                            enableMouseTracking: false
                        }
                    },
                    series: [{
                        name: '常见问题',
                        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }, {
                        name: '技术架构',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    }]
                });
            }
        }
    }
</script>

<style scoped>
    .layout-title{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .layout-title i{
        padding-top: 16px;
    }
    .layout-title h5{
        color: #8c8c8c;
        font-size: 15px;
        margin: 10px;
    }
    .layout-title-content{
        font-size: 30px;
        display: flex;
        justify-content: space-between;
        line-height: 1.2;
    }
.layout-welcome{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    line-height: 2;
}
.layout-welcome div {
    margin: 10px;
}
    .layout-welcome-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        line-height: 2;
    }
</style>