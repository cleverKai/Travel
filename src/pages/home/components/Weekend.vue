<template>
    <div>
       <div class="weekend">周末去哪儿</div>
       <ul>
           <li class="item" v-for="item of weekend" :key="item.id">
               <img class="item-img" :src="item.imgUrl" alt="">
               <p class="item-title">{{item.title}}</p>
               <p class="item-desc">{{item.desc}}</p>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    name:"HomeWeekend",
    props:{
        weekend:{
            type: Array,
            default (){
                return []
            }
        }
    },
    data(){
        return{
        }
    },
}
</script>

<style lang="css" scoped>
    .weekend{
       margin-top: 10px;
       line-height: 40px;
       background-color: #eee;
       text-indent: 10px;
       color: #212121;
    }
    .item{
        height: 202px;
    }
    .item .item-img{
        width: 100%;
        height: 140px;
        opacity: 1;
    }
    .item .item-title{
        margin-top: 10px;
        margin-left: 10px;
        color: #212121;
        font-size: 15px;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item .item-desc{
        margin-left: 10px;
        height: 20px;
        color: #616161;
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>