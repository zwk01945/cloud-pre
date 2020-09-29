<template>
    <Card class="layout-install">
        <div class="layout-install-title">
            <h1>Cloud-Pre</h1>
            <pre v-highlightjs>
             <h3>克隆项目到本地</h3>
             <code class="html" style="text-align:left;background: #303133">
                 {{ cloudPre.clone }}
             </code>
                <h3>运行到开发方式</h3>
                <code class="html" style="text-align:left;background: #303133">
                 {{ cloudPre.dev }}
             </code>
                <h3>部署运行</h3>
                <code class="html" style="text-align:left;background: #303133">
                 {{ cloudPre.server }}
             </code>
            </pre>
        </div>
        <div class="layout-install-title">
            <h1>Cloud-Admin</h1>
            <pre v-highlightjs>
             <h3>克隆项目到本地</h3>
             <code class="html" style="text-align:left;background: #303133">
                 {{ cloudAdmin.clone }}
             </code>
                <h3>开启Nacos注册中心</h3>
                <code class="html" style="text-align:left;background: #303133">
                 {{ cloudAdmin.registry }}
             </code>
                <h3>部署运行</h3>
                <code class="html" style="text-align:left;background: #303133">
                 {{ cloudAdmin.ohter }}
             </code>
            </pre>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "ProjetInstall",
        data() {
            return {
                code: '<pre v-highlightjs>\n' +
                    '    <code class="html" style="text-align:left;">{{ code }}</code>\n' +
                    '</pre>',
                cloudPre:{
                    clone:'git clone https://github.com/zwk01945/cloud-pre.git',
                    dev:'npm run server',
                    server:'npm run build'
                },
                cloudAdmin:{
                    clone:'git clone https://github.com/zwk01945/spring-cloud.git',
                    registry:'未配置nacos持久化可tools下的nacos-cluster全部启动,在开启nginx后可以访问5000端口',
                    ohter:'配置nacos持久化等详情查看技术架构'
                }
            }
        }
    }
</script>

<style scoped>
    .layout-install {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        padding: 20px;
    }

    .layout-install-title {
        text-align: left;
        line-height: 1.2;
    }
</style>