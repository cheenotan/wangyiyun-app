<template>
    <div class="hot-list">
        <div class="header">
            <span class="left">发现歌单</span>
            <span class="right">查看更多</span>
        </div>
        <div class="music-list">
            <van-swipe class="swipe" :loop="false" :width="130" :show-indicators="false">
                <van-swipe-item v-for="item in state.hotList" :key="item">
                    <RouterLink :to="{ path:'/musicdetail',query:{id:item.id}}">
                        <div class="img">
                            <img :src="item.picUrl" alt="">
                            <span class="playcount">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-bofang1"></use>
                                </svg>
                                <span> {{formatCount(item.playCount)}}</span>
                            </span>
                        </div>
                        <span class="name">{{item.name}}</span>
                    </RouterLink>
                </van-swipe-item>
            </van-swipe>
        </div>

    </div>

</template>

<script>
import { getMusicList } from '@/service/api_home'
import { formatCount } from '@/utils/format'
import { reactive } from 'vue'
import { onMounted } from 'vue'

export default {
    setup() {
        const state = reactive({
            hotList: []
        })

        onMounted(async () => {
            const res = await getMusicList()
            state.hotList = res.data.result
        })
        return { state, formatCount };
    }
}
</script>


<style lang="less" scoped>
.hot-list {
    padding-top: .4rem;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            font-size: .4rem;
            font-weight: 900;
        }

        .right {
            border: .02rem solid gray;
            border-radius: .5rem;
            padding: .04rem .1rem;
        }
    }

    .swipe {
        // height: 5rem;
        width: 100vw;
        padding-top: .2rem;
        position: relative;
        left: -0.2rem;

        .img {
            width: 2rem;
            height: 2rem;
            position: relative;
            border-radius: .2rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }

            .playcount {
                position: absolute;
                top: .1rem;
                right: .1rem;
                font-size: .2rem;
                color: white;
                border: .02rem solid gray;
                border-radius: .5rem;
                padding: .04rem .1rem;
                background-color: #EEEEEE;
                background-color: rgba(0, 0, 0, .5);
                vertical-align: middle;

                .icon {
                    width: .2rem;
                    height: .2rem;
                    margin-right: .06rem;
                }

            }
        }


    }

    .name {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -moz-box;
        word-wrap: break-word;
        word-break: break-all;
        white-space: normal;
        overflow: hidden;
        /* position: relative; */
    }

    .van-swipe-item {
        width: 2rem;
    }

    .van-swipe-item:first-child {
        margin-left: .2rem;
    }
}
</style>