import { request } from './request'

export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}

export function getGoodList(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}