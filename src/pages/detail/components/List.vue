<template>
    <div>
        <div class="item" v-for="(item , index) of categoryList" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <!-- 递归组件，组件自身调用自己 -->
            <div v-if="item.children" class="item-childen">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailList",
    props:{
        categoryList:{
            type: Array,
            default (){
                return []
            }
        }
    }
}
</script>

<style lang="css">
    .item-title{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        padding: 0 10px;
    }
    .item-title-icon{
        position: relative;
        top: 4px;
        left: 3px;
        display: inline-block;
        width: 18px;
        height: 18px;
        line-height: 18px;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22.5px no-repeat;
        margin-right: 5px;
        background-size: 20px 150px;
    }
    .item-childen{
        padding: 0 10px;
    }
</style>