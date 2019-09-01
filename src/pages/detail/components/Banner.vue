<template>
<div>
    <div  class="banner" @click="handleBannerClick">
       <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" alt="">
       <div class="banner-info">
           <div class="banner-title">成都海昌极地海洋公园(AAAA景区)</div>
           <div class="banner-number">
             <span class="iconfont banner-icon">&#xe6df; 54</span>
           </div>
       </div>
    </div>
    <common-gallary :swiperImgs="swiperImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    components:{
        CommonGallary,
    },
    data (){
        return{
            swiperImgs: ["http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_r_800x800_fa912897.jpg",
            "http://img1.qunarzz.com/sight/p0/1904/b7/b73f703a79fbada3.img.jpg_r_800x800_2f862acc.jpg"],
            showGallary: false,
        }
    },
    methods: {
        handleBannerClick (){
            this.showGallary = true
        },
        handleGallaryClose (){
            this.showGallary = false
        }
    }
}
</script>

<style lang="css" scoped>
    /* 页面防抖 */
    .banner{
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .banner-img{
        width: 100%;
    }
    .banner-info{
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 30px;
        color: #fff;
        background-image: linear-gradient(top, rgba(0 ,0 , 0 ,0) ,rgba(0,0,0,.8))
    }
    .banner-info .banner-title{
        flex: 1;
        font-size: 18px;
        padding: 8px 6px;
    }
    .banner-info .banner-number{
        padding:0 10px;
        height: 20px;
        line-height: 20px;
        border-radius: 10px;
        font-size: 14px;
        margin-top: 14px;
        background:rgba(0, 0, 0, .5);
        margin-right: 20px;
    }
     .banner-info .banner-number .banner-icon{
         font-size: 12px;
     }
</style>