import axios from 'axios'

export function request(config, success, failure) {

    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.response.use(res=>{
        return res.data.data
    })
    return instance(config)

}