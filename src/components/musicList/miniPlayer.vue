<template>
    <div class="player">
        <div class="left" @click="updatePlayerShow()">
            <img :src="songList[songIndex].al.picUrl" alt="" ref="picUrl">
            <div class="info">
                <p>{{ songList[songIndex].al.name }}</p>
                <span>横滑可以切换上下首哦</span>
            </div>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true" @click="handelToPlay" v-if="isPaused">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="handelToPause" v-else>
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofangliebiao"></use>
            </svg>
        </div>
        <audio ref="audio" preload="auto" @timeupdate="onTimeUpdate"
            :src="`https://music.163.com/song/media/outer/url?id=${songList[songIndex].id}.mp3`"></audio>

    </div>
    <van-popup v-model:show="PlayerShow" position="bottom" :style="{ height: '100%', width: '100%' }">
        <mianPlayer :updatePlayerShow="updatePlayerShow" :songList="songList[songIndex]" :isPaused="isPaused"
            :handelToPlay="this.handelToPlay" :handelToPause="this.handelToPause" :sliderValue="this.sliderValue"
            :audioStart="this.audioStart" :audioEnd="this.audioEnd" @child-event='updateAudio' :currentLyc="currentLyc"
            @isChaning="isChanging"
            @notChaning="notChanging"
            >
        </mianPlayer>
    </van-popup>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { formatDUration } from '@/utils/format'
import mianPlayer from '@/components/musicList/mianPlayer.vue'

export default {
    setup() {
        return {
            audioStart: "00:00",
            audioEnd: "01:36",
            lyrics: [],
            currentIndex: 0,
            currentLyc: '',
            isSliderChanging:false
        }
    },
    components: {
        mianPlayer
    },
    computed: {
        ...mapState(['songList', 'songIndex', 'isPaused', 'PlayerShow', 'sliderValue', 'currentTime', 'durationTime', 'lyricInfos',
            'currentLyc',
            'currentIndexs'
        ])
    },
    methods: {
        onTimeUpdate(e) {
            this.updateSlider(e)
            this.updateLyric(e)

        },
        isChanging() {
            this.isSliderChanging = true
        },
        notChanging() {
            this.isSliderChanging = false
        },
        updateLyric(e) {
            const currentTimes = e.target.currentTime * 1000
            // console.log(currentTimes);
            // console.log(this.lyricInfos.length);
            for (let i = 0; i < this.lyricInfos.length; i++) {
                const lyc = this.lyricInfos[i]
                // console.log(lyc.time);
                if (currentTimes < lyc.time) {
                    const currentIndex = i - 1
                    if (this.currentIndex !== currentIndex) {
                        const currentLycs = this.lyricInfos[currentIndex]
                        console.log(currentLycs.text);
                        this.currentLyc = currentLycs.text
                        // this.updateCurrentLyc(currentLycs.text)
                        this.currentIndex = currentIndex
                    }
                    break
                }

            }
        },
        updateSlider(e) {
            const cTime = e.target.currentTime
            const dTime = e.target.duration
            if(!this.isSliderChanging) {
             const value = (cTime / dTime) * 100
            this.updateSliderValue(value)
            }
            
            this.audioStart = formatDUration(cTime)
            this.audioEnd = formatDUration(dTime)

            this.updateCurrentTime(cTime)
            this.updateDurationTime(dTime)
        },
        updateAudio(value) {
            this.$refs.audio.currentTime = value
        },
        // formatDUration(duration) {
        //     duration = duration * 1
        //     var minute = Math.floor(duration / 60).length === 2 ? Math.floor(duration / 60) : "0" + Math.floor(duration / 60)
        //     var second = Math.floor(duration) % 60
        //     var seconds = second >= 10 ? second : "0" + second
        //     return minute + ":" + seconds
        // },
        handelToPlay() {
            this.$refs.audio.play()
            this.updatePlayingStatu(false)
        },
        handelToPause() {
            this.$refs.audio.pause()
            this.updatePlayingStatu(true)
        },
        // handelToShowPlayer() {
        //     this.updatePlayerShow()
        // },
        ...mapMutations(['updatePlayingStatu', 'updatePlayerShow', 'updateSliderValue', 'updateCurrentTime', 'updateDurationTime', 'updateCurrentLyc']),
        ...mapActions(['getLyric'])
    },
    watch: {
        songIndex() {
            // console.log(this.$refs.audio);
            this.$refs.audio.autoplay = true
            this.handelToPlay()
            this.getLyric(this.songList[this.songIndex].id)
        }
    },
    mounted() {
        // console.log(this.$refs.audio);
        // console.log(this.lyricInfos);
        this.getLyric(this.songList[this.songIndex].id)
        this.lyrics = this.lyricInfos
        console.log(this.lyrics);
    },
    updated() {
        this.getLyric(this.songList[this.songIndex].id)
    }
}

</script>

<style lang="less" scoped>
.player {
    position: fixed;
    bottom: 0;
    height: 1.5rem;
    width: 100%;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    z-index: 99;

    .left {
        display: flex;
        width: 60%;
        // justify-content: space-around;

        img {
            height: .8rem;
            width: .8rem;
            border-radius: .5rem;
            overflow: hidden;
            background-color: red;
            // padding-right: .3rem;
        }

        .info {
            padding-left: .2rem;

            p {
                font-weight: 700;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                display: -moz-box;
                word-wrap: break-word;
                word-break: break-all;
                white-space: normal;
                overflow: hidden;
            }

            span {
                font-size: .2rem;
                color: #999;
            }
        }


    }

    .right {
        width: 30%;
        display: flex;
        justify-content: space-around;

        .icon {
            width: .6rem;
            height: .6rem;
        }
    }

    audio {
        position: absolute;
        z-index: 99;
    }
}
</style>