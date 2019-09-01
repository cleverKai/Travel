<template>
    <div>
        <div class="header-abs" @click="goBack" v-show="showAbs">
             <div class="iconfont back-icon">&#xe646;</div>
        </div>
        <div class="header-fixd" :style="opacityStyle" v-show="!showAbs">
            景点详情
            <router-link to="/">
                <div class="iconfont header-back">&#xe646;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailHeader",
    data (){
        return{
            showAbs: true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        goBack (){
            this.$router.go(-1)
        },
        handleScroll (){
            const top = document.documentElement.scrollTop
            if(top > 60 ){
                let opacity = top/140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity:opacity
                }
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    activated (){
        window.addEventListener("scroll",this.handleScroll)
    }
    
}
</script>

<style lang="css" scoped>
    .header-abs{
        position: absolute;
        top: 9px;
        left: 4px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background:rgba(0, 0, 0, .5);
    }
    .back-icon{
        color: #fff;
        font-size: 25px;
    }
    .header-fixd{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 44px;
        width: 100%;
        line-height: 44px;
        text-align: center;
        color: #fff;
        background-color: #00bcd4;
    }
    .header-fixd .header-back{
        position:absolute;
        top: 0;
        left: 0;
        text-align: center;
        font-size: 25px;
        width: 32px;
        color: #fff;
    }
</style>