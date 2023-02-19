<template>
  <router-view />
  <mini-player></mini-player>
</template>

<script>
  import miniPlayer from '@/components/musicList/miniPlayer.vue'
  export default {
    components:{
      miniPlayer
    }
}
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: #000;
}
</style>
