const mongoose = require('mongoose')
const User = mongoose.model('user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {

    try {
        const { authorization } = req.headers
        const token = authorization.replace(/Bearer /g, '')
        const decoded = jwt.verify(token, 'israel')
        const user = await User.findById(decoded._id)

        if (!user) {
            return res.status(401).send({ error: 'Please authenticate' })
        }

        req.user = user
        res.token = token
        next()
    } catch (e) {
        console.log(e)
        res.status(401).send({ error: 'Please authenticate' })
    }
}


module.exports = {
    auth
}