<template>
  <div>
    <div class="topbar bg-black py-2 px-3 flex-row ai-center">
      <img src="../assets/logo.png" height="30" alt="">
      <div class="px-2 flex-1">
        <div class="text-white">本命英雄</div>
        <div class="text-grey-1 fs-xxs">快去查看你的本命英雄吧</div>
      </div>
      <button class="btn bg-primary text-white" @click="$router.push('/slot')">点击查看</button>
    </div>
    <div class="pt-3 pb-2 bg-primary">
      <div class="nav text-white pb-1 nav-inverse jc-around">
        <div class="nav-item active">
          <router-link class="nav-link" to="/" tag="span">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="" tag="span">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="" tag="span">首页</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
  .topbar {
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>