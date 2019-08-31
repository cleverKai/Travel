import Vue  from 'vue'
import  Vuex from 'vuex'
import  state from './state'
import mutations from './mutations'
Vue.use(Vuex)

//创建store仓库并导出
export default new Vuex.Store({
    //state存放全局公用的数据
    state: state,
    //没有复杂的一部操作和批量数据操作，可以不用actions进行转发
    // actions: {
    //     changeCity (ctx,city){
    //         // console.log(city)
    //         ctx.commit("changeCity", city)
    //     }
    // },
    mutations: mutations
})