const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('user')
const jwt = require('jsonwebtoken')
const { auth } = require('../middleware/auth')

router.get('/hello', auth, (req, res) => {
    res.send('hello world')
})

router.post('/signup', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Need to provide email and password' })
    }

    try {
        const user = new User({ email, password })
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })
    } catch (e) {
        console.log(e)
        if (e.code === 11000) {
            // res.status(422).send({error:`Duplicate value ${e}`})
            res.status(422).send({ error: `Duplicate value ${JSON.stringify(e.keyValue).replace(/(\x5c|{|}|")/g, '')}` })
        } else {
            res.status(404).send({ error: e })

        }
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Need to provide email and password' })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).send({ error: 'Unvalid authentication' })
        }
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })
    } catch (e) {
        console.log(e)
        if (e.code === 11000) {
            // res.status(422).send({error:`Duplicate value ${e}`})
            res.status(422).send({ error: `Duplicate value ${JSON.stringify(e.keyValue).replace(/(\x5c|{|}|")/g, '')}` })
        } else {
            res.status(404).send({ error: e })

        }
    }

})


module.exports = {
    router
}