<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe646;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search">&#xe86e;</span>
      输入城市/景点/游玩主题
    </div>
    <!-- router-link用于页面跳转 -->
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  props: {
    city: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  height: 43px;
  background-color: #00bcd4;
  color: #fff;
  line-height: 43px;
}
.header-left {
  width: 32px;
  float: left;
}
.header-left .back-icon {
  text-align: center;
  font-size: 25px;
}
.header-input {
  flex: 1;
  height: 32px;
  line-height: 32px;
  margin-top: 6px;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 5px;
  color: #ccc;
  padding-left: 10px;
}
.header-input span.search {
  font-size: 20px;
  line-height: 32px;
}
.header-right {
  width: 64px;
  float: right;
  text-align: center;
  font-size: 15px;
  color:#fff;
}
.header-right span.arrow-icon {
  font-size: 12px;
  margin-left: -2px;
}
</style>