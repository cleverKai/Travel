<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner> 
        <detail-header></detail-header> 
        <div class="content">
             <detail-list :categoryList="categoryList"></detail-list> 
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    data (){
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs: [],
            categoryList:[],
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
      methods:{
        getDetailInfo (){
            axios.get(" /api/detail.json",{
                params:{
                    id:this.$route.params.id
                }
            }).then((res) =>{
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    // console.log(data)
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.categoryList = data.categoryList
                }
            })
        }
    },
    mounted (){
        this.getDetailInfo()
    },
}
</script>

<style lang="css" scoped>
    .content{
        height: 2500px;
    }
</style>