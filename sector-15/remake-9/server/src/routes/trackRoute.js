const mongoose = require('mongoose')
const express = require('express')
const { auth } = require('../middleware/auth')
const Track = mongoose.model('track')
const router = express.Router()

router.post('/tracks', auth, async (req, res) => {
    const { name, locations } = req.body
    if (!name || !locations) {
        return res.status(422).send({ error: 'Please provide name and locations' })
    }
    try {
        const track = new Track({ userId: req.user._id, name, locations })
        await track.save()
        res.status(201).send()
    } catch (e) {
        res.status(404).send({ error: e.message })
    }
})

router.get('/tracks', auth, async (req, res) => {
    try {
        const tracks = await Track.find({ userId: req.user._id })
        console.log(tracks)
        res.send({ tracks })
    } catch (e) {
        res.status(404).send({ error: e.message })
    }

})


module.exports = {
    router
}