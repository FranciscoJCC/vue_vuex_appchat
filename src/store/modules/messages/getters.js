const getters = {
    getMessages: (state) => (channelId) =>{
        return state.messages.filter((message) => message.channelId === parseInt(channelId))
    },

    //Obtenemos mensaje sin leer
    getUnreadMessages: (state, getters) => (channelId) => {
        return getters.getMessages(channelId).filter((message) => message.read == false).length
    }
}

export default getters;