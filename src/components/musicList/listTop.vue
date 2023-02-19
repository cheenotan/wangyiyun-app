<template>
    <div class="list-top">
        <img :src="listDetail.coverImgUrl" alt="" class="bgimg">
        <div class="header">
            <div class="left">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-zuojiantou_huaban"></use>
                </svg>
                <span>歌单</span>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-31liebiao"></use>
                </svg>
            </div>
        </div>
        <div class="list-mid">
            <div class="mid-img">
                <img :src="listDetail.creator.avatarUrl" alt="">
            </div>
            <div class="mid-content">
                <div>
                    <span class="name">{{listDetail.name}}</span>
                </div>

                <div class="ar-info">
                    <img :src="listDetail.creator.backgroundUrl" alt="">
                    <span class="ar-name">{{listDetail.creator.nickname}}></span>
                </div>
                <div>
                    <span class="desc">{{listDetail.description}}</span>
                </div>

            </div>

        </div>
        <div class="icon-list">
            <div class="navItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-31xiaoxi"></use>
                </svg>
                <span>{{listDetail.commentCount}}</span>
            </div>
            <div class="navItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{listDetail.shareCount}}</span>
            </div>
            <div class="navItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="navItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xuanze"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    setup(props) {
        props.listDetail.creator = ""
        console.log(props);
    },
    props: ['listDetail']
}
</script>

<style lang="less" scoped >
.list-top {
    width: 100vw;
    height: 35%;
    padding: 0.2rem;
    color: white;

    // box-sizing: border-box;
}

img {
    width: 100%;
    height: 100%;
}

.bgimg {
    width: 100%;
    height: 35%;
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(30px);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left,
    .right {
        width: 23%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .4rem;

        .icon {
            fill: white;
        }

    }

}

.list-mid {
    width: 100%;
    display: flex;
    padding-top: .4rem;

    .mid-img {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: .2rem;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .mid-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-left: .3rem;

        .name {
            font-size: .35rem;
            font-weight: 600;

        }

        .ar-info {
            display: flex;
            align-items: center;
            padding: .2rem 0;

            img {
                width: .5rem;
                height: .5rem;
                border-radius: .3rem;
                overflow: hidden;
            }

            .ar-name {
                font-size: .3rem;
                color: #CCCCCC;
                padding-left: .08rem;
                // vertical-align: middle;
            }
        }
    }

    .desc {
        font-size: .2rem;
        color: #DDDDDD;
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
}

.icon-list {
    padding-top: .4rem;
    display: flex;
    justify-content: space-around;

    .navItem {
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
            fill: white;
        }

        span {
            padding-top: .25rem;
        }
    }
}
</style>

