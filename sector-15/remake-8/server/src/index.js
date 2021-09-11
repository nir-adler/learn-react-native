const express = require('express')
const mongoose = require('mongoose')
require('../src/models/User')
require('../src/models/Track')
const { router: authRouter } = require('../src/routes/userRouter')
const { router: trackRouter } = require('../src/routes/trackRouter')

const url = 'mongodb+srv://taskapp:Ride2021up2022@cluster0.ezxmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongoose conneted Success')
}).catch((e) => {
    console.log(e)
})

const app = express()
app.use(express.json())
app.use(authRouter)
app.use(trackRouter)






app.listen(3000, () => {
    console.log('Server up on port 3000')
})