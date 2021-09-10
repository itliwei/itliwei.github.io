<template>
    <span class="only-for-printer" style="padding-top:300px">
        <br/>威少
        <br/>itliwei@163.com
        <br/>发行日期：{{updateDate}}
    </span>
</template>

<script>
    export default {
        name: "PublishInfos",
        computed: {
            updateDate: function () {
                let rootPage = this.$site.pages.find(p => p.path === '/')
                return rootPage.siteLastUpdated;
            },
        }
    }
</script>

<style scoped>

</style>
