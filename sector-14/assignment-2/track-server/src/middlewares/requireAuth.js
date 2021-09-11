const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('user')


module.exports = (req, res, next) => {
    // const token = req.header('Authorization').replace(/Bearer /g, '')
    const { authorization } = req.headers

    if (!authorization) {
        res.status(401).send({ error: 'You must logged in.' })
    }
    const token = authorization.replace(/Bearer /g, '')
    jwt.verify(token, 'israel', async (err, payload) => {
        if (err) {
            res.status(401).send({ error: 'You must logged in.' })

        }
        const { _id } = payload
        const user = await User.findById(_id)

        req.user = user
        next()
    })

}