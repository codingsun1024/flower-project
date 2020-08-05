import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutations-type'
export default {
    [ADD_COUNT](state, oldProductList) {
        oldProductList.count += 1
    },
    [ADD_TO_CART](state, payload) {
        payload.count = 1
        payload.checked = true
        state.productList.push(payload)
    }
}