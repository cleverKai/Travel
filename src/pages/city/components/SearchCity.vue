<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:"SearchCity",
    data (){
        return{

        }
    }
}
</script>

<style lang="css" scoped>
    .search{
        height: 36px;
        width: 100%;
        padding: 0 5px;
        background-color: #00bcd4;
    }
    .search-input{
        box-sizing: border-box;
        width: 97.5%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 3px;
        padding: 0,5px;
        border: none;
        outline: none;
        color: #666;
    }
</style>