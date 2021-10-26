const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('user')


const auth = async (req, res, next) => {
    const { authorization } = req.headers
    const token = authorization.replace(/Bearer /g, '')
    const { _id } = jwt.verify(token, 'israel')
  
    if (!_id) {
        return res.status(422).send({ error: 'Please authenticate' })
    }
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(422).send({ error: 'User is not found!' })
        }
        req.user = User
        res.token = token
        next()
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    auth
}