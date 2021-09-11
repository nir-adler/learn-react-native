const mongoose = require('mongoose')
const express = require('express')
const User = mongoose.model('user')
const jwt = require('jsonwebtoken')
const { auth } = require('../middleware/auth')
const { Router } = require('express')

const router = express.Router()

router.post('/signup', async (req, res) => {
    // console.log(req.body)
    const { password, email } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Porvide email and password' })
    }
    try {
        const user = new User({ email, password })
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })

    } catch (e) {
        console.log(e.code)
        console.log(e.toString())
        if (e.code === 11000) {
            res.status(422).send( {error:`Duplicate value ${JSON.stringify(e.keyValue).replace(/(\x5c|{|}|")/g,'')}`} )
        } else {

            res.status(400).send({ error: e.message })
        }
    }

})

router.post('/signin', async (req, res) => {
    const { password, email } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Porvide email and password' })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(422).send('Id not found')
        }
        const match = await user.comparePassword(password)
        if (!match) {
            return res.status(422).send('Cannot login')
        }
        const token = jwt.sign({ _id: user._id }, 'israel')
        res.send({ token })

    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})


router.get('/hello', (req, res) => {

    // console.log(req.token)
    // console.log(req.user)

    res.send('Success')

})

module.exports = {
    router
}

