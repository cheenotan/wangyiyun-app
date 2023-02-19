import request from './index'

export function getMusicItemList(id){
    return request({
        method:'GET',
        url:`/playlist/detail?id=${id}`
    })
}
//获取歌单的歌曲
export function getItemList(data){
    return request({
        method:'GET',
        url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}

//获取歌曲的歌词
export function getMusicLyric(id){
    return request({
        method:'GET',
        url:`/lyric?id=${id}`
    })
}