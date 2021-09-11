const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Track = mongoose.model('track')
const { auth } = require('../middleware/auth')

router.post('/tracks', auth, async (req, res) => {
    const { name, locations } = req.body

    if (!name || !locations) {
        return res.status(422).send({ error: 'Send email and locations' })
    }

    try {
        const track = new Track({ userId: req.user._id, name, locations })
        await track.save()
        res.status(201).send()
    } catch (e) {
        res.status(400).send({ error: e.message })
    }

})

router.get('/tracks', auth, async (req, res) => {
    try {
        const tracks = await Track.find({ userId: req.user._id })

        res.send({ tracks })
    } catch (e) {
        res.status(404).send({ error: e.message })
    }
})

module.exports = {
    router
}
