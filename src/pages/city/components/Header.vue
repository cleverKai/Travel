<template>
  <div class="header">
    城市选择
    <div class="iconfont back-icon" @click="goBack">&#xe646;</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data() {
    return {}
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>


<style lang="css" scoped>
.header {
  position: relative;
  height: 44px;
  width: 100%;
  line-height: 44px;
  text-align: center;
  color: #fff;
  background-color: #00bcd4;
}

.header .back-icon {
  position:absolute;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 25px;
  width: 32px;
}
</style>