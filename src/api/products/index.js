import axios from "axios"

export default {
    async getProducts() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // console.log(response)
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("Error Fetching Data")
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },

    // async buyProducts (products) {
    //   await wait(100)
    //   if (
    //     // simulate random checkout failure.
    //     (Math.random() > 0.5 || navigator.webdriver)
    //   ) {
    //     return
    //   } else {
    //     throw new Error('Checkout error')
    //   }
    // }
}