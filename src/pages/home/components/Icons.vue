<template>
  <swiper :options="swiperOption">
    <swiper-slide  v-for="(page,index) of pages" :key="index">
      <div class="icons">
        <div class="icon" v-for="item of page" :key="item.id" >
          <img :src="item.imgUrl" alt />
          <p>{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
    }
  },
  props:{
    iconList:{
      type: Array,
      default (){
        return []
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="css" scoped>
.icons {
  height: 190px;
  width: 100%;
  margin-top: 12px;
  /* background-color: green; */
}
.icon {
  float: left;
  width: 93px;
  height: 80px;
  /* background-color: red; */
}
.icon img {
  width: 55px;
  height: 55px;
  margin-left: 20px;
}
.icon p {
  text-align: center;
  margin-top: 0.1rem;
  color: #212121;
  font-size: 14px;
  /* 如果title过长，使用...来代替 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>