import { createStore, createLogger } from 'vuex'
import items from './modules/products'

export default createStore({
    modules: {
        items,
    },
})