const mongoose = require('mongoose')
const User = mongoose.model('user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.replace(/Bearer /g, '')
        const decoded = jwt.verify(token, 'israel')
        const user = await User.findById({ _id: decoded._id })

        if (!user) {
            return res.status(422).send({ error: 'Please signin' })
        }

        req.user = user
        req.token = token

        next()

    } catch (e) {
        res.status(400).send({ error: e.message })
    }


}


module.exports={
    auth
}