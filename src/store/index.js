import Vue from 'vue'
import Vuex from 'vuex'
import grade from './modules/grade'

Vue.use(Vuex)

export default new Vue.Store({
    modules:{
        grade
    }
   
})
