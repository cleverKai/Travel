<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList " :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    data (){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:"2000",
                autoplayDisableOnInteraction : false,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper,
                disableOnInteraction: true,
            },
        }
    },
    computed:{
        showSwiper(){
          return  this.swiperList.length
        }
    },
     props:{
         swiperList:{
             type: Array,
             default (){
                 return []
             }
         }
     }
}
</script>



<style lang="css" scoped>
    .wrapper{
        margin-top: 43px;
        width: 100%;
        height: 100px;
    }
    /* 样式穿透 */
    .wrapper >>> .swiper-pagination-bullet-active{
        background: #fff;
    }
    .swiper-img{
        width: 100%;
        background: #eee;
    }
</style>