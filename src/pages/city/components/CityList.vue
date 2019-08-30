<template>
    <div class="list" ref="wrapper">
     <div class="content">
       <div class="area">
           <div class="title">当前城市</div>
           <div class="button-list">
               <div class="button">{{this.localcity}}</div>
           </div>
       </div>
       <div class="area  ">
           <div class="title">热门城市</div>
           <div class="hostcity">
               <ul>
                   <li class="item right " v-for="(item, index) of hostCities" :key="item.id">{{item.name}}</li>
               </ul>
           </div>
       </div>
       <div class="area">
           <div class="title">字母排序</div>
           <div class="word">
              <ul>
                  <li class="item" v-for="item of words" :key="item.id">{{item.name}}</li>
              </ul>
           </div>
       </div>
       <div class="area" v-for="(items , key) of cities " :key="items.id">
           <div class="title">{{key}}</div>
           <div class="Acity">
               <ul>
                   <li class="item left" v-for="item of items">{{item.name}}</li>
               </ul>
           </div>
       </div>
    </div>
</div>
</template>


<script>
import Bscroll from 'better-scroll'
export default {
    name:"CityList",
    data (){
        return{}
    },
    props:{
       localcity: {
           type: String,
           default: ''
       },
       hostCities:{
           type: Array,
           default(){
               return []
           }
       },
       words:{
           type: Array,
           default(){
               return []
           }
       },
       cities:{
           type: Object,
           default(){
               return []
           }
       }
    },
    mounted(){
       this.$nextTick( () =>{
            this.scroll = new Bscroll(this.$refs.wrapper);
       })
    }
}
</script>

<style lang="css" scoped>
  .list{
     overflow: hidden;
      height: calc(100vh - 80px); 
   }
  .area .title{
      line-height: 38px;
      background-color: #eee;
      padding-left: 15px;
      font-size: 12px;
   }
   .button-list{
       padding: 5px;
       height: 40px;
       line-height: 40px;
   }
   .button-list .button{
       text-align: center;
       width: 50px;
       height: 25px;
       line-height: 25px;
       margin-top: 9px;
       margin-left: 10px;
       font-size: 14px;
       border-radius: 5px;
       border:1px solid #00bcd4;
   }
   .area .hostcity{
       width: 100%;
       height: 180px;
   }
   .area .hostcity li.item{
        width: 33%;
        height: 44.8px;
        line-height: 44.8px;
        font-size: 14px;
        text-align: center;
        border-bottom: 1px solid #ddd;
        margin-bottom: -1px;
        /* float: left; */
        position: relative;
        z-index: 10;
        float: left;
        color: #212121;
   }
   .area .hostcity li.right{
       border-left: 1px solid #ddd;
   }
   .area .word{
       height:190px;
       position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        padding: 10px 0;
   }
   .area .word .item{

       height: 50px;
       width:62.5px;
       line-height: 50px;
       text-align: center;
       color: #212121;
       display: block;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       float: left;
       font-size: 14px;
       /* margin-left: 15px; */

   }
   .area .Acity{
    position: relative;
    overflow: hidden;
    z-index: 0;
    background-color: #fff;
   }
   .area .Acity .item{
    width: 24.71%;
    height: 44.8px;
    line-height: 44.8px;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    /* margin-bottom: -1px; */
    float: left;
    position: relative;
    z-index: 10;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   }
   .area .Acity .left{
       border-right: 1px solid #ddd;
   }
</style>