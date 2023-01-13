import products from '../../api/products'

const state = () => ({
    items: [],
    // checkoutStatus: null
})

// getters
const getters = {
    allProducts: (state) => state.items,

    // cartTotalPrice: (state, getters) => {
    //     return getters.cartProducts.reduce((total, product) => {
    //         return total + product.price * product.quantity
    //     }, 0)
    // }
}

// actions
const actions = {
    async getAllProducts({ commit }) {
        // commit calls a mutation
        try {
            let data = await products.getProducts()
            commit('setItems', data)
        } catch (error) {

        }

    }
}

// mutations
const mutations = {
    setItems: (state, data) => state.items = data
}

export default {
    state,
    getters,
    actions,
    mutations,
}