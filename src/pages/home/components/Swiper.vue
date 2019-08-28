<template>
<div class="wrapper">
    <swiper :options="swiperOption" >
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
                autoplay:"2000"
            },
            swiperList:[
            {
                id:"0001",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/c8b961a9e605276f0c7fb1093d24f50b.jpg_750x200_95afd3d5.jpg"
            },
            {
                id:"0002",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/0861f192a4f5abfc2cbb2acd1d89db47.jpg_750x200_bb852052.jpg"
            },
            {
                id:"0003",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/fffc0c06ddfe6fa9bad3cd813b591873.jpg_750x200_528c2db7.jpg"
            },
            {
                id:"0004",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
            },
            {
                id:"0005",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/2bf6cffe02525445c215e45ea128162b.jpg_750x200_32f01903.jpg"
            },
            {
                id:"0006",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
            },
            {
                id:"0007",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/cf66383468ffedfb0d5d53376a2aeae4.jpg_750x200_d6dd73e1.jpg"
            }
            ]
        }
    }
}
</script>



<style lang="css" scoped>
    .wrapper{
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