<template>
    <listTop :listDetail='state.listDetail'></listTop>
    <songList :songList="state.songList" :subscribedCount="state.listDetail.subscribedCount"></songList>
</template>

<script>
import { useRoute } from 'vue-router'
import listTop from '@/components/musicList/listTop.vue'
import songList from '@/components/musicList/songList.vue'
import { getMusicItemList, getItemList } from '@/service/api_list'
import { reactive, onMounted } from 'vue'
export default {
    setup() {
        const state = reactive({
            listDetail: {},
            songList: []
        })
        onMounted(async () => {
            const id = useRoute().query.id
            const res = await getMusicItemList(id)
            // console.log(res);
            state.listDetail = res.data.playlist
            const res2 = await getItemList({id,limit: 20, offset: 0})
            console.log(res2);
            state.songList = res2.data.songs 
        })
        return { state }
    },
    components: {
        listTop,
        songList
    }
}
</script>

<style lang="less" scoped>
</style>