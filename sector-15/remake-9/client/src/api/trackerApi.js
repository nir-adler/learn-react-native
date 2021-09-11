import axios from 'axios'
import * as SecureStore from 'expo-secure-store'




const instance = axios.create({
    baseURL: 'http://cbea-62-219-235-16.ngrok.io'

})

instance.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default instance
