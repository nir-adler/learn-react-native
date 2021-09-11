const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = mongoose.model('user')

router.post('/singup', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Provide password and email' })
    }

    try {
        const user = new User({ email, password })
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.status(201).send({ token })
    } catch (e) {
        if (e.code === 11000) {
            res.status(422).send({ error: `Duplicate ${JSON.stringify(e.keyValue).replace(/(\x5c|{|}|")/g, '')}` })
        } else {
            res.status(400).send({ error: e.message })
        }
    }
})


router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Provide password and email' })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({ error: 'Invalid credentials' })
        }
        await user.comparePassword(password)
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.status(201).send({ token })
    } catch (e) {
            res.status(400).send({ error: e.message })
    }
})

router.get('/', (req, res) => {
    res.send('bbbb')
})

module.exports = {
    router
}