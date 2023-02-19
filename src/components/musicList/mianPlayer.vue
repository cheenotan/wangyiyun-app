<template>

    <div class="container">
        <img :src="songList.al.picUrl" alt="" class="bgimg">
        <div class="topBar">
            <div class="left" @click="handelToshow()">
                <img src="@/assets/icons/arrow-left.png" alt="">
            </div>
            <span class="mid">{{ songList.al.name }}</span>
            <div class="right">
                <img src="@/assets/icons/share_icon.png" alt="">
            </div>
        </div>
        <div class="content">
            <div class="song-img">
                <img :src="songList.al.picUrl" alt="">

            </div>
            <div class="lyric">
                <!-- <p v-for="item in lyricInfos" :key="item">{{ item.text }}</p> -->
                <p>{{ currentLyc }}</p>
            </div>
            <div class="slider">

                <van-slider v-model="sliderValue" @change="onChange" @drag-start="drag - start" @drag-end="dragEnd" />

            </div>
            <div class="dt">
                <span class="currentTime">{{ audioStart }}</span>
                <span class="durationTime">{{ audioEnd }}</span>
            </div>

        </div>
        <div class="operation">
            <img class="mode btn" src="@/assets/player/play_order.png">
            <img class="prev btn" src="@/assets/player/play_prev.png" @click="next(-1)">
            <img class="resume btn" src="@/assets/player/play_resume.png" v-if="isPaused" @click="handelToPlay">
            <img class="pause btn" src="@/assets/player/play_pause.png" v-else @click="handelToPause">
            <img class="next btn" src="@/assets/player/play_next.png" @click="next(+1)">
            <img class="music btn" src="@/assets/player/play_music.png">
        </div>
    </div>

</template>

<script>
// import { log } from 'console';
import { mapMutations, mapState } from 'vuex';
// import {formatDUration} from '@/utils/format'

export default {
    props: ['songList', 'isPaused', 'handelToPlay', 'handelToPause', 'sliderValue', 'audioStart', 'audioEnd', 'currentLyc'],
    computed: {
        ...mapState(['lyricInfos', 'sliderValu', 'durationTime', 'isSliderChanging', 'songList', 'songIndex'])
    },
    mounted() {
        console.log(this.songList);
    },
    methods: {
        ...mapMutations(['updatePlayerShow', 'updatePlayingStatu', 'updateSliderState', 'updateSongIndex']),
        handelToshow() {
            this.updatePlayerShow()
        },
        next(value) {
            const newIndex = this.songIndex + value

            if (newIndex < 0) return

            if (newIndex > this.songList) return

            console.log(newIndex);
            this.updateSongIndex(newIndex)
        },
        onChange(value) {
            console.log(value);
            var newTime = (value / 100) * this.durationTime
            this.$emit('child-event', newTime)
        },
        dragStart() {
            this.$emit('isChaning')
        },
        dragEnd() {
            this.$emit('notChaning')
        },
        formatDUration(duration) {
            duration = duration * 1
            var minute = Math.floor(duration / 60).length === 2 ? Math.floor(duration / 60) : "0" + Math.floor(duration / 60)
            var second = Math.floor(duration) % 60
            var seconds = second >= 10 ? second : "0" + second
            return minute + ":" + seconds
        }

    }
}
</script>

<style lang="less" scoped>
.container {
    // background-color: black;
    width: 100%;
    height: 100%;
    padding: .2rem;
    // height: 100%;
    overflow: hidden;

    .bgimg {
        width: 100%;
        height: 100%;
        position: absolute;
        // top: 0;
        z-index: -1;
        filter: blur(50px);
    }

    .topBar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .mid {
            color: white;
        }

        .left,
        .right {
            width: .7rem;
            height: .7rem;

            img {
                width: 100%;
                height: 100%;
                // background-color: black;
            }
        }
    }

    .content {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .song-img {
            // width: 70%;
            flex: 4;
            padding-bottom: .5rem;

            display: flex;
            justify-content: center;
            align-items: center;

            // flex: 30%;
            img {
                width: 4rem;
                height: 4rem;
                border-radius: 2rem;
                overflow: hidden;
            }
        }

        .lyric {
            display: flex;
            // overflow: scroll;
            // flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex: 5;
            color: white;

            // background-color: antiquewhite;
            p {
                font-size: .3rem;
                padding-top: .1rem;
                // color: rgb(19, 16, 16);
            }
        }

        .slider {
            width: 80%;
        }

        .dt {
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: .4rem;
            color: white;
        }

    }

    .operation {
        position: fixed;
        bottom: .3rem;
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-around;

        .btn {
            width: 1rem;
            height: 1rem;
        }

    }
}
</style>