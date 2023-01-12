import { createStore, createLogger } from 'vuex'
import items from './modules/items'

export default createStore({
    modules: {
        items,
    },
})