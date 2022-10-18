import { createStore } from 'vuex'

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
    updateUsername(state, username){
        state.username = username;
    }
  }
})

export default store