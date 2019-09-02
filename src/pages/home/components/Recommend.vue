<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item" v-for="item of recommend" :key="item.id" @click="goDetail(item.id)">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="tip">随买随用</div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-ping">{{item.ping}}</p>
                <div class="price">￥<span>{{item.price}}</span></div>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
    </div>
</template>



<script>
export default {
    name:"HomeRecommend",
    data(){
        return{
        }
    },
    props:{
        recommend:{
            type: Array,
            default (){
                return []
            }
        }
    },
    methods:{
        goDetail (id){
            this.$router.push('detail/' + id )
        }
    }

}
</script>

<style lang="css" scoped>
    .title{
        margin-top: 10px;
        line-height: 40px;
        background-color: #eee;
        text-indent: 10px;
    }
    .item{
       position: relative;
       overflow: hidden;
       display: flex;
       height: 158px;
       /* background-color: red;  */
    }
    .item .tip{
        background-image: url('https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png');
        position: absolute;
        height: 20px;
        width: 60px;
        top: 10px;
        left: 10px;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        text-align: center;
    }
    .item-img{
        width: 100px;
        height: 100px;
        padding: 10px;
    }
    .item-info{
        flex:1;
    }
    .item-info p.item-title{
        margin-top: 15px;
        height:20px;
        color: #212121;
        font-size: 17px;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
     }
     .item-info p.item-ping{
        margin-top: 10px;
        color: #616161;
        font-size: 12px;
        line-height: 17px;
        vertical-align: text-bottom;
     }
     .item-info .price{
         margin-top: 10px;
         display: inline-block;
         font-size: 20px;
         color: #ff8300;
     }
     .item-info p.item-desc{
        margin-top: 25px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #f55;
        font-size: 12px;
        line-height: 17px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
}
     
</style>