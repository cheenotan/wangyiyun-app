<template>
    <div class="song-list">
        <div class="list-header">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <span>播放全部<span>(共{{songList.length}}首)</span></span>
            </div>
            <div class="right">
                <span>+ 收藏({{subscribedCount}})</span>
            </div>
        </div>
        <div class="list-items">
            <div class="list-item" v-for="(item,i) in songList" :key="i">
                <div class="list-left" @click="changeSonglist(i)">
                    <span class="index">{{i + 1}}</span>
                    <div class="info">
                        <p class="name">{{item.al.name}}</p>
                        <span class="ar">{{item.ar[0].name}}</span>
                    </div>
                </div>
                <div class="list-right">
                    <svg class="icon" aria-hidden="true" v-if="item.mv != 0">
                        <use xlink:href="#icon-shipinbofang"></use>
                    </svg>
                    <svg class="icon liebiao" aria-hidden="true">
                        <use xlink:href="#icon-bofang"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    setup(props) {
        console.log(props);
    },
    methods:{
        ...mapMutations(['updateSonglist','updateSongIndex']),
        changeSonglist(i) {
            this.updateSonglist(this.songList)
            this.updateSongIndex(i)
        }
    },
    props: ['songList','subscribedCount']
}
</script>

<style lang="less" scoped>
    .song-list {
        background-color: white;
        padding: 0.2rem;
        border-radius: .3rem;
        padding-bottom: 1.5rem;
    }
    .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // vertical-align: middle;
        .left {
            height: 100%;
           display: flex;
           align-items: center;
           .icon {
            width: .7rem;
            height: .7rem;
           }
           span {
            font-weight: 700;
            span {
                font-weight: 400;
                color: #999;
                font-size: .25rem;
            }
           }

        }
        .right {
            border:1px  black;
            padding: .16rem;
            border-radius: .3rem;
            background-color: red;
            color: white;
        }
    }

    .list-items {
        .list-item {
            display: flex;
            padding-top: .4rem;
            .list-left {
                display: flex;
                flex: 1;
                align-items: center;
                .index {
                    font-size: .3rem;
                    color: #999;
                }
                .info {
                    margin-left: .2rem;
                    .name {
                        font-weight: 500;
                    }
                    .ar {
                        font-size: .2rem;
                        color: #999;
                    }
                }
            }
            .list-right {
                padding-right: 0;
                fill: #999;
                .icon {
                    margin-left: 10px;
                }
            }
        }
    }

</style>