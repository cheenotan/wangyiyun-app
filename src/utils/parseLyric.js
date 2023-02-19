export function parseLyric(lyricInfo) {
    const lyricRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
    const lyricStr = lyricInfo.split("\n") 
    const fineResult = []
    for ( const lineLyric of lyricStr ) {
        // console.log(lineLyric);
        const timeResult = lyricRegExp.exec(lineLyric)
        // console.log(timeResult);
        if (!timeResult) continue
        const minute = timeResult[1] * 60 * 1000
        const second = timeResult[2] * 1000
        const ms = timeResult[3].length === 3 ? timeResult[3] * 1 : timeResult[3] * 10
        const time = minute + second + ms
        const text = lineLyric.replace(lyricRegExp,"");
        // console.log(`time:${time} , text:${text}`);
        fineResult.push({time,text})
    }
    return fineResult
}