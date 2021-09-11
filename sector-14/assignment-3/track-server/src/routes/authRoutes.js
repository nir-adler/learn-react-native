const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body
        // console.log(req.body)
        const user = new User({ email, password })
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })

    } catch (e) {
        res.status(422).send({ error: e.message })
    }
})


router.post('/signin',async (req, res) => {
    const { email, password } = req.body

    console.log()

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password!' })
    }
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).send({ error: 'cannot login' })
    }
    try {
        await user.comparePassword(password)
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })

    } catch (e) {
        return res.status(422).send({ error: 'Invalid email or password' })
    }




})

module.exports = {
    router
}