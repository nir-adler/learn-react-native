const mongoose = require('mongoose')
const User = mongoose.model('user')
const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()


router.post('/signup', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Please send email and password' })
    }


    try {
        const user = new User({ email, password })
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.status(201).send({ token })
    } catch (e) {
        console.log(e)
        if (e.code === 11000) {
            res.status(422).send({ error: `Duplicate ${JSON.stringify(e.keyValue).replace(/(\x5c|{|}|")/g, '')}` })
        } else {
            res.status(400).send({ error: e })

        }
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Please send email and password' })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(403).send({ error: 'Invalid singin' })
        }
        await user.comparePassword(password)
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })
    } catch (e) {
        res.status(403).send({ error: e.message })
    }


})


module.exports = {
    router
}