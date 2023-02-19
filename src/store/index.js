import { createStore } from 'vuex'
import {getMusicLyric} from '@/service/api_list'
import {parseLyric} from '@/utils/parseLyric'
export default createStore({
  state: {
    songList: [{
      al: {
        id: 92124085,
        name: "昨日青空 (毕业特别版)",
        pic: 109951165122422850,
        picUrl: "https://p2.music.126.net/8oAfZYT5Gd9HDQBxu00eAQ==/109951165122422841.jpg",
        pic_str: "109951165122422841"
      },
      id: 474668315
    }],
    songIndex:0,
    isPaused:true,
    PlayerShow:false,
    lyricInfos:[],
    sliderValue:0,
    currentTime:0,
    durationTime:0,
    currentLyc:'',
    currentIndexs:0,
    isSliderChanging:false
  },
  getters: {
  },
  mutations: {
    updatePlayingStatu(state,value) {
      state.isPaused = value
    },
    updateSonglist(state,value) {
      state.songList = value
    },
    updateSongIndex(state,value) {
      state.songIndex = value
    },
    updatePlayerShow(state) {
      state.PlayerShow = !state.PlayerShow
    },
    updateLyricInfo(state,value) {
      state.lyricInfos = value
    },
    updateSliderValue(state,value) {
      state.sliderValue = value
    },
    updateCurrentTime(state,value) {
      state.currentTime = value
    },
    updateDurationTime(state,value) {
      state.durationTime = value
    },
    updateCurrentLyc(state,value) {
      state.currentLyc = value
    },
    updateSliderState(state){
      !state.isSliderChanging
    }
  },
  actions: {
    async getLyric(context,value){
      const res = await getMusicLyric(value) 
      const lyricInfo = res.data.lrc.lyric
      // console.log(lyricInfo);
      const lyricInfos = parseLyric(lyricInfo)
      context.commit("updateLyricInfo",lyricInfos)
      // console.log();
    }
  },
  modules: {
  }
})
