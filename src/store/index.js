import { createStore } from 'vuex'
import { COMMIT_UPDATE_USERNAME } from '@/common/muations-types.js'
import { getUser } from '@/api'



const store = createStore({
  state(){
    return {
        username: 'Francisco Cervantes'
    }
  },
  //Es similar a las variables computadas, pero no pertenecen a ningun component, si no, a un estado. (Son reactivos)
  getters: {
    firstName(state) {
        return state.username.split(' ')[0];
    },
    //Primero parametro del state y segúndo parametro de la vista
    reverseName: (state) => (c) => {
        return state.username.split('').join(c)
    }
  },
  //Actualizan datos del estado
  mutations:{ 
    //Primer parametro es el estado, el segúndo es el payload, variable a cambiar (opcional).
    [COMMIT_UPDATE_USERNAME](state, username){
        state.username = username;
    }
  },

  //Actualizaciones más complejas del estado
  //Un aplicación de los actions, podría ser para obtener la sesión de usuario y mandarla en las peticiones.
  actions: {
    //El commmit es para poder invocar los mutations y el valor que recibimos
    async updateUsername({ commit, state }, username) {
        //CODIGO PARA ACTUALIZAR VALORES EN EL BACKEND
        const user = await getUser(1);
        console.log("UPDATE DESDE ACTIONS", state, user)
        commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  }
})

export default store