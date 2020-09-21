<template>
    <Card :padding="0" class="layout-md">
        <Button :style="{margin: '10px'}" type="primary" shape="circle" icon="ios-link">局内导航</Button>
        <Divider :style="{margin: '10px',minWidth:'auto',width:'auto'}"/>
        <Anchor :affix="false" show-ink style="width: inherit;margin: 0;">
            <AnchorLink v-for="(item,index) in normalLink" :key="index" :href="item.href" :title="item.title" />
            <AnchorLink :href="item.groupHref" v-for="(item,index) in groupLink" :key="'g' + index" :title="item.groupTitle">
                <AnchorLink :style="{paddingLeft: '20px!important'}" v-for="(item,index) in item.sub" :key="index" :href="item.href" :title="item.title" />
            </AnchorLink>
        </Anchor>
    </Card>
</template>

<script>
    export default {
        name: "AnchorRight",
        props:{
            normalLink:Array,
            groupLink:Array,
        }
    }
</script>

<style scoped>
    .layout-md{
        width: 150px;
        position: fixed;
        top: 90px;
        right: 20px;
        margin: 0!important;
    }
</style>