<template>
<swiper :options="swiperOption" >
    <swiper-slide>
   <div class="icons">
    <div class="icon" v-for="item of icon" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <p>{{item.title}}</p>
    </div>
   </div>
</swiper-slide>

 <swiper-slide>
   <div class="icons">
    <div class="icon" v-for="item of iconOther" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <p>{{item.title}}</p>
    </div>
   </div>
</swiper-slide>
<div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</template>

<script>
export default {
    name:"HomeIcons",
    data(){
        return{
            swiperOption:{
                 pagination:'.swiper-pagination',
            },
            icon:[
                {
                    id:"001",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title:"景点门票"
                },
                {
                    id:"002",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png",
                    title:"暑期夜场"
                },
                {
                    id:"003",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    title:"成都必游"
                },
                {
                    id:"004",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
                    title:"川剧变脸"
                },
                {
                    id:"005",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    title:"一日游"
                },
                {
                    id:"006",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
                    title:"碧峰峡"
                },
                {
                    id:"007",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                    title:"游乐场"
                },
                {
                    id:"008",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
                    title:"熊猫基地"
                }
            ],
            iconOther:[
                {
                    id:"009",
                    imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/57489034f410bdc823e7fa1b9e82dfd4.png",
                    title:"清凉一夏"
                },
                {
                    id:"010",
                    imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png",
                    title:"都江堰"
                }
            ],
        }
    },
    // computed:{
    //     pages(){
    //         let pages = [];
    //         let page = Math.floor((this.icon.length)/8);
    //         pages.push(page);
    //         pages.forEach((item , index) =>{

    //         })
    //     }
    // }
}
</script>

<style lang="css" scoped>
    .icons{
      height:190px;;
      width: 100%;
      margin-top: 12px;
      /* background-color: green; */
    }
    .icon{
        float: left;
        width: 93px;
        height: 80px;
        /* background-color: red; */
    }
    .icon img{
        width: 55px;
        height: 55px;
        margin-left: 20px;
    }
    .icon p{
        text-align: center;
        margin-top: .1rem;
        color: #212121;
        font-size: 14px;
    }
</style>