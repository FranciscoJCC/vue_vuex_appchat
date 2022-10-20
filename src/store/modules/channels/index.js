const module = {
    //Habilitar el espacio de nombres del modulo
    namespaced: true,

    state(){
        return {
            channels: [
                { id: 1, name: 'Random', messages: [] },
                { id: 2, name: 'Emergencias', messages: [] },
                { id: 3, name: 'Anuncios', messages: [1] },
                { id: 4, name: 'Proyecto 1', messages: [] },
                { id: 5, name: 'SCRUM', messages: [] },
                { id: 6, name: 'Atención a clientes', messages: [] }
            ],
        }
    },

    getters: {
        //Retorna todos los channels
        //Primer parametro recibe el state, segundo parametro recibe datos de la vista
        getChannels: (state) => (search) => {
            return state.channels.filter((channel) => channel.name.toLowerCase().includes(search.toLowerCase()))
        }
    }
}

export default module