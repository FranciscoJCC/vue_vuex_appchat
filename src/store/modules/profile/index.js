import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/muations-types.js'
import { getUser } from '@/api'

const module = {

    //Espacio de nombres para el modulo
    namespaced: true,

    state() {
        return {
            username: ''
        }
    },
    //Es similar a las variables computadas, pero no pertenecen a ningun component, si no, a un estado. (Son reactivos)
    getters: {
        firstName: (state) => (c) => {
            return state.username.split('').join(c);
        },
        //Primero parametro del state y segúndo parametro de la vista
        reverseName: (state) => (c) => {
            return state.username.split('').join(c)
        }
    },

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
        async updateUsername({ commit, state, rootState }, username) {
            //CODIGO PARA ACTUALIZAR VALORES EN EL BACKEND
            const user = await getUser(1);
            
            //Actualizamos el nombre del usuario
            commit(COMMIT_UPDATE_USERNAME, user.username)

            //Validamos si existe un usuario
            //Si fuera necesario llamar un modulo se antepone el nombre, por ejemplo: profile/setStatus
            if(state.username) commit(COMMIT_SET_STATUS,'active', { root: true }) 


            
        }
    },
}

export default module;