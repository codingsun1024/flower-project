import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutations-type'
export default {
    addCart({ state, commit }, payload) {
        return new Promise((resolve, reject) => {
            let oldProductList = state.productList.find(item => item.iid === payload.iid)
            if (oldProductList) {
                commit(ADD_COUNT, oldProductList)
                resolve('当前商品数量+1')
            } else {
                commit(ADD_TO_CART, payload)
                resolve('增加了新的商品')
            }
        })
    }
}