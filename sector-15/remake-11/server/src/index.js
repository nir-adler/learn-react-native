require('./db/mongoose')
require('./models/User')
require('./models/Track')
const { router: authRoutes } = require('./routes/authRoutes')
const { router: trackRoutes } = require('./routes/trackRoutes')
require('./routes/trackRoutes')
const express = require('express')

const app = express()
app.use(express.json())
app.use(authRoutes)
app.use(trackRoutes)
app.get('/', (req, res) => {
    res.send('Hi There')
})


app.listen(8081, () => {
    console.log('Server up on port 8081')
})