<template>
    <div class="city">
      <city-header></city-header>
      <search-city></search-city>
      <city-list :localcity="localcity" :hostCities="hostCities" :words="words" :cities="cities">
      </city-list>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import SearchCity from './components/SearchCity'
import CityList from './components/CityList'
import axios from 'axios'
export default {
    name:"City",
    data (){
        return{
            localcity:"",
            cities: {},
            hostCities: [],
            words: [],
        }
    },
    components:{
        CityHeader,
        SearchCity,
        CityList,
    },
    methods:{
        //对城市数据进行请求
        getCityInfo(){
            axios.get('/api/city.json').then((res) =>{
               res = res.data;
               if(res.ret && res.data){
                  const data = res.data;
                  this.localcity = data.localcity;
                //   console.log( this.localCity)
                  this.cities = data.cities;
                  this.hostCities = data.hotCities;
                  this.words = data.words;
               }
            })
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>


<style lang="css">
  .city{
      height: 100%;
  }
</style>