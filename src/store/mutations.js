export default {
    changeCity (state , city){
        state.city = city
        //利用类似cookie/localStorge本地存储city
        try{
            localStorage.city = city
        }catch (e){}
    }
}