<template>
    <div>
     <Header></Header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
   </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
    data(){
       return{

       }
    },
   components:{
      Header,
      HomeSwiper,
      HomeIcons,
   }
}
</script>

<style lang="">
    
</style>