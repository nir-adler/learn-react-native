require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const { router: authRouter } = require('./routes/authRoutes')

const url = 'mongodb+srv://taskapp:Ride2021up2022@cluster0.ezxmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('mongoose connected Success')
}).catch((e) => {
    console.log(e.messga)
})

const app = express()
app.use(express.json())
app.use(authRouter)


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})