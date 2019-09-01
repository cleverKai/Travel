<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item , key) in swiperImgs" :key="key">
          <img class="gallary-img"  :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
      swiperImgs:{
          type: Array,
          default (){
              return []
          }
      }
  },
  data (){
      return{
          swiperOptions :{
              pagination: '.swiper-pagination',
              paginationType: 'fraction',
              //解决swiper重新加载宽度重新计算问题
              observeParents: true,
              observer: true,
          }
      }
  },
  methods: {
      handleGallaryClick (){
          this.$emit("close")
      }
  },
}
</script>


<style lang="css" scoped>
.container >>> .swiper-container{
    overflow: inherit;
}
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 99;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
}
.wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
}
.wrapper .gallary-img{
    width: 100%;
}
.swiper-pagination{
    color: #fff;
    bottom: -50px;
}
</style>