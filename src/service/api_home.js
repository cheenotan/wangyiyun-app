import request from ".";

export function getBanner(){
    return request({
        method:'GET',
        url:'/banner?type=2'
    })
}

export function getMusicList(){
    return request({
        method:'GET',
        url:'/personalized?limit=10',
    })
}
