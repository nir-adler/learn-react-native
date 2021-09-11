const express = require('express')
const mongoose = require('mongoose')
require('./models/User')
require('./models/Track')
const { router: AuthRouter } = require('./routes/AuthRoute')
const { router: TrackRouter } = require('./routes/TrackRoute')


const url = 'mongodb+srv://taskapp:Ride2021up2022@cluster0.ezxmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongoose connected Successed')
}).catch((e) => {
    console.log(e)
})

const app = express()
app.use(express.json())
app.use(AuthRouter)
app.use(TrackRouter)



app.listen(3000, () => {
    console.log('Server up on port 3000')
})