import axios from 'axios'

export function request(config) {

    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/x6',
        timeout: 5000
    })

    instance.interceptors.response.use(res => {
        return res.data.data
    })
    return instance(config)
}