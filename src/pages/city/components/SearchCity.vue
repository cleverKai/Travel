<template>
  <div>
    <div class="search">
      <input v-model="keyword" @click="searchClick" class="search-input" placeholder="输入城市名或拼音" type="text" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasList">没有找到匹配的城市</li> 
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'SearchCity',
  props:{
      cities:{
          type:Object,
          default (){
              return {}
          }
      }
  },
  data() {
    return {
        keyword: "",
        list: [],
        timer: null,
    }
  },
  computed:{
      hasList (){
          return !this.list.length
      }
  },
  watch: {
      keyword (){
          //节流函数
          if(this.timer){
              clearTimeout(this.timer)
          }
          if(!this.keyword){
              this.list = []
              this.$emit("show")
          }
          this.timer = setTimeout(() =>{
              const result = []
              for (let i in this.cities){
                  this.cities[i].forEach((value) =>{
                      if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                          result.push(value)
                      }
                  })
              }
              this.list = result
          },100)
      }   
  },
  mounted (){
     this.$nextTick (() =>{
         this.scroll = new Bscroll(this.$refs.search)
     })
  },
  methods:{
      searchClick (){
          this.$emit("search");
        // console.log("search")
      }
  }
}
</script>

<style lang="css" scoped>
.search {
  height: 36px;
  width: 100%;
  padding: 0 5px;
  background-color: #00bcd4;
}
.search-input {
  box-sizing: border-box;
  width: 97.5%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 3px;
  padding: 0, 5px;
  border: none;
  outline: none;
  color: #666;
}
.search-content{
    z-index:1;
    overflow: hidden;
    position: absolute;
    top:80px;
    bottom: 0;
    left: 0;
    right: 0; 
    background-color:#eee;   
}
.search-item{
    line-height: 31px;
    padding-left: 10px;
    color: #666;
    background-color: #fff;
}
</style>