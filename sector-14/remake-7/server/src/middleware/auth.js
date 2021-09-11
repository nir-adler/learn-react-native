const mongoose = require('mongoose')
const User = mongoose.model('user')
const jwt = require('jsonwebtoken')

const auth =async (req, res, next) => {
    const { authorization } = req.headers
    const token = authorization.replace(/Bearer /g, '')
    const decoded = jwt.verify(token, 'israel')
   
    const user=await User.findById(decoded._id)
    try {
        if (!user) {
            throw new Error('Please authenticate')
        }

        req.user = user
        req.token = token

        next()
    } catch (e) {
        res.status(422).send({ error: e.message })
    }

}

module.exports = {
    auth
}