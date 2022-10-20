import { createStore } from 'vuex'
import profile from '@/store/modules/profile'
import channels from '@/store/modules/channels'
import { COMMIT_SET_STATUS } from '@/common/muations-types.js'


const store = createStore({
  state(){
    return {
      status: null,
    }
  },

  //Actualiza el valor del estatus
  mutations: {
    [COMMIT_SET_STATUS](state, value){
      state.status = value
    }
  },
  
  //Modulos para organizar el estado por funciones 
  modules: {
    profile,
    channels,
  }
})

export default store