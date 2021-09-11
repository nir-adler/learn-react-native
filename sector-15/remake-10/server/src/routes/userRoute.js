const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/hello', (req, res) => {
    res.send('My name is nir')
})

router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = new User({ email, password })
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.status(201).send({ token })
    } catch (e) {
        console.log(e)
        if (e.code === 11000) {
            res.status(404).send({ error: `Duplicate value ${JSON.stringify(e.keyValue).replace(/(\x5c|{|}|")/g, '')}` })
        } else {
            res.send({ error: JSON.stringify(e.message) })
        }
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Please provide email and password' })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Invalid credentials')
        }
        const match = await user.comparePassword(password)
        if (!match) {
            throw new Error('Invalid credentials')
        }
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })

    } catch (e) {
        res.status(404).send({ error: e.message })
    }


})

module.exports = {
    router
}
