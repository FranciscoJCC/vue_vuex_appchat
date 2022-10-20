const module = {
    //Habilitar el espacio de nombres del modulo
    namespaced: true,

    state(){
        return {
            channel : null,
            channels: [
                { id: 1, name: 'Random', messages: 1 },
                { id: 2, name: 'Emergencias', messages: null },
                { id: 3, name: 'Anuncios', messages: 1 },
                { id: 4, name: 'Proyecto 1', messages: null },
                { id: 5, name: 'SCRUM', messages: null },
                { id: 6, name: 'Atención a clientes', messages: null }
            ],
        }
    },

    getters: {
        //Retorna todos los channels
        //Primer parametro recibe el state, segundo parametro recibe datos de la vista
        getChannels: (state, getters, rootState, rootGetters) => (search) => {
            return state.channels
                .filter(
                    (channel) => channel.name.toLowerCase()
                    .includes(search.toLowerCase())
                ).map((channel) => {
                    const messages = rootGetters['messages/getUnreadMessages'](channel.id);
                    return {
                        ...channel,
                        messages
                    }
                })
        }
    },

    mutations: {
        setChannel: () => {
            
        }
    }
}

export default module