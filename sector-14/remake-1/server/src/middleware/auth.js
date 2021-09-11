const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('user')

module.exports= async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.replace(/Bearer /g, '')
        const decoded = jwt.verify(token, 'israel')
        const user = await User.findById(decoded._id)
        if (!user) {
            return res.status(400).send({ error: 'please log in' })
        }
        req.user = user
        next()
    } catch (e) {
        res.status(422).send(e.message)
    }
}