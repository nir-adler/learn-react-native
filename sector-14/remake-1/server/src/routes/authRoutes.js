const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const jwt = require('jsonwebtoken')

const router = express.Router()



router.post('/signup', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(422).send({ error: 'Send email and password' })
    }
    try {
        const user = new User({ email, password })
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.status(201).send({ token })
    } catch (e) {
        res.status(422).send(e.message)
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(422).send({ error: 'Send email and password' })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({ error: 'Cannot find user!' })
        }
        const match = await user.comparePassword(password)
        if (!match) {
            return res.status(404).send({ error: 'Cannot validate!' })
        }
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })

    } catch (e) {
        console.log(e.message)
    }
})



module.exports = {
    router
}