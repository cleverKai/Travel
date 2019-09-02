<template>
  <div id="app">
    <!-- keep-alive:将当前渲染的组件放到内存中，下一次到该路由时直接去内存里面拿，不会重新渲染组件 -->
    <!-- 提高性能 -->
    <!-- exclude:对Detail组件不做缓存 -->
    <keep-alive exclude="DetailBanner,DetailList" >
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
