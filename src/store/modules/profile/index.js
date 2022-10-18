import { COMMIT_UPDATE_USERNAME } from '@/common/muations-types.js'
import { getUser } from '@/api'

const module = {
    state() {
        return {
            username: 'Francisco JCer'
        }
    },

    getters: {
        firstName: (state) => (c) => {
            return state.username.split('').join(c);
        },
        
        reverseName: (state) => (c) => {
            return state.username.split('').join(c)
        }
    },

    mutations:{ 
        [COMMIT_UPDATE_USERNAME](state, username){
            state.username = username;
        }
    },

    actions: {
        async updateUsername({ commit, state }, username) {
            const user = await getUser(1);
            commit(COMMIT_UPDATE_USERNAME, user.username)
        }
    },
}

export default module;