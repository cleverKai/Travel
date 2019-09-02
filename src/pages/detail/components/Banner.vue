<template>
<div>
    <div  class="banner" @click="handleBannerClick">
       <img class="banner-img" :src="this.bannerImg" alt="">
       <div class="banner-info">
           <div class="banner-title">{{this.sightName}}</div>
           <div class="banner-number">
             <span class="iconfont banner-icon">&#xe6df; {{this.gallaryImgs.length}}</span>
           </div>
       </div>
    </div>
    <common-gallary :swiperImgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    props:{
        sightName:{
            type:String,
            default: "",
        },
        bannerImg:{
            type:String,
            default: "",
        },
        gallaryImgs:{
            type: Array,
            default (){
                return []
            }
        }
    },
    components:{
        CommonGallary,
    },
    data (){
        return{
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