/* Variable reactiva de ejemplo */
/* Manejar un estado, sin librerias */
import { reactive } from 'vue'

const store = reactive({
    username : 'FranciscoJCC',

    updateUsername(username){
        this.username = username;
    }
})

export default store