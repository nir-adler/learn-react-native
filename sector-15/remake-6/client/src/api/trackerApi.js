import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const instance = axios.create({
    baseURL: 'http://b002-62-219-235-16.ngrok.io'
})
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }

)

export default instance