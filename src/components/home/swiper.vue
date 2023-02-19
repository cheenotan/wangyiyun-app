<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>



<script>
import { getBanner } from '@/service/api_home'
import { reactive, onMounted } from 'vue'
export default {
    setup() {
        const state = reactive({
            images: []
        })
        onMounted(async()=>{
            const res = await getBanner()
            // console.log(res);
            state.images = res.data.banners
        })
        return { state };
    },

};
</script>

<style lang="less" scoped>
.van-swipe {
    width: 100%;
    height: 3rem;
    border-radius: .3rem;
    overflow: hidden;

    .van-swipe-item {
        height: 100%;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
        }
    }
}
</style>