const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('user')


const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.replace(/Bearer /g, '')
        const decoded = jwt.verify(token, 'israel')
        const user = await User.findById(decoded._id)
        if (!user) {
            throw new Error('Please authenticate')
        }

        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.status(401).send({ error: JSON.stringify(e) })
    }
}


module.exports = {
    auth
}