<template>
    <div class="home-view">
        <topNav></topNav>
        <swiper></swiper>
        <iconList></iconList>
        <hotList></hotList>
    </div>
</template>

<script>
 import topNav from '@/components/home/topNav.vue'
 import swiper from '@/components/home/swiper.vue'
 import iconList from '@/components/home/icon-list.vue'
 import hotList from '@/components/home/hot-list.vue'
 export default {
    name: 'HomeView',
    components:{
        topNav,
        swiper,
        iconList,
        hotList
    }
 }
</script>

<style lang="less" scoped>
.home-view {
  padding: 0.2rem;
}
</style>