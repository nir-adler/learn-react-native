import axios from 'axios'



export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer n5H30XU7ZFGLZ51le2wUjO1kN4dlsVuoib6x_k-E7YKZlzc1wGNWEnZAPmua2d5TkwyD4kFpCv9772-xyX7hTg9l8YKH9-4m7ICipyCR9nV6z6z2TyXlZ4MEhPwHYXYx'
    }
})

