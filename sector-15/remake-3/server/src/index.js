const express = require('express')
const mongoose = require('mongoose')
require('./models/User')
require('./models/Track')
const {router:AuthRoute}=require('../src/routes/AuthRoute')
const {router:TrackRoute}=require('../src/routes/TrackRouth')

const url = 'mongodb+srv://taskapp:Ride2021up2022@cluster0.ezxmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Mongoose connected Success!')
}).catch((e)=>{
    console.log(e.message)
})

const app = express()
app.use(express.json())
app.use(AuthRoute)
app.use(TrackRoute)

app.listen(3000, () => {
    console.log('Server up on port 3000')
})
