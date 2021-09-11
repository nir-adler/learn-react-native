const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')
const router = express.Router()
const Track = mongoose.model('track')


router.use(requireAuth)

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body
    console.log(req.body)
    if (!name || !locations) {
        return res.
            status(422).
            send({ error: 'You must provide a name and locations' })
    }

    try {
        const track = new Track({ name, locations, userId: req.user._id })
        await track.save()
        res.send(track)
    } catch (e) {
        res.status(422).send({ error: e.message })
    }

})

router.get('/tracks', async (req, res) => {
    try {
        const tracks = await Track.find({ userId: req.user._id })
        res.send({ tracks })
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

module.exports = {
    router
}