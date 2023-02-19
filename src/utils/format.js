export function formatCount(count) {
    var counter= parseInt(count)
    if ( counter > 100000000) {
        return (counter / 100000000).toFixed(1) + '亿'
    } else if (counter > 10000) {
        return (counter / 10000).toFixed(1) + '万'
    } else {
        return counter + ''
    }
}

export function formatDUration(duration) {
    duration = duration * 1
    var minute = Math.floor(duration / 60).length === 2? Math.floor(duration / 60) : "0" + Math.floor(duration / 60)
    var second = Math.floor(duration) % 60
    var seconds = second >= 10 ? second : "0" + second
    return minute + ":" + seconds
}

// module.exports = {
//     formatDUration:formatDUration
// }