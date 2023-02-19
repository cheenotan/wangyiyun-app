<template>
  <div class="top-nav">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao" />
      </svg>
    </div>
    <div class="top-center">
      <span>我的</span>
      <span class="faxian">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo" />
      </svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1rem;
  .top-center {
    width: 70%;
    // height: 100%;
    display: flex;
    justify-content: space-around;
    // align-items: center;
    .faxian {
      font-weight: 900;
    }
  }
}
</style>