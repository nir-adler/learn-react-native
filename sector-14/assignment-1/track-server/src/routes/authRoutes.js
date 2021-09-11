const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        const user = new User({ email, password })
        await user.save()
        res.send('You made a post request')

    } catch (e) {
        res.status(422).send({error:e.message})
    }
})

module.exports = {
    router
}