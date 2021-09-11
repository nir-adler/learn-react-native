require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const {router:authRoutes}=require('./routes/authRoutes')


const app = express()

app.use(express.json())
app.use(authRoutes)


const mongoUri = 'mongodb+srv://taskapp:Ride2021up2022@cluster0.ezxmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('Success connect to mongodb server')
}).catch((e)=>{
    console.log(e.toString())
})

app.get('/', (req, res) => {
    res.send('Hi There!')
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})