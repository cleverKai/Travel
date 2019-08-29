<template>
    <div>
     <Header :city="city"></Header>
     <home-swiper :swiperList="swiperList"></home-swiper>
     <home-icons :iconList="iconList"></home-icons>
     <home-recommend :recommend="recommend"></home-recommend>
     <home-weekend :weekend="weekend"></home-weekend>
   </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    data(){
       return{
          city: "",
          swiperList: [],
          iconList: [],
          recommend: [],
          weekend: [],
       }
    },
    methods:{
       //数据请求函数
       getHomeInfo(){
         axios.get('/api/index.json').then((res) =>{
            res = res.data;
            if(res.ret && res.data){
               const data = res.data
               this.city = data.city;
               this.swiperList = data.swiperList;
               this.iconList = data.iconList;
               this.recommend = data.recommendList;
               this.weekend = data.weekendList;
            }
         }) 
       }   
    },
    mounted(){
       //挂载完毕过后，进行数据请求
       this.getHomeInfo();
    },
   components:{
      Header,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
   }
} 
</script>

<style lang="css">
    
</style>