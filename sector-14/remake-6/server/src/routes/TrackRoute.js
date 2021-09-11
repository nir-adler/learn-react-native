const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Track = mongoose.model('track')
const { auth } = require('../middleware/auth')

router.post('/tracks', auth, async (req, res) => {
    const { name, locations } = req.body
    if (!name || !locations) {
        return res.status(422).send({ error: 'Send name and Locations' })
    }

    try {
        const track = new Track({ userId: req.user._id, name, locations })
        await track.save()

        res.send()
    } catch (e) {
        res.status(400).send({ error: e.message })
    }

})

router.get('/tracks', auth, async (req, res) => {

    try {
        const tracks = await Track.find({ userId: req.user._id })
        res.send({ tracks })
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

module.exports = {
    router
}