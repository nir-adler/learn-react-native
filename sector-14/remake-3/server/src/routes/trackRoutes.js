const mongoose = require('mongoose')
const express = require('express')
const Track = mongoose.model('track')
const { auth } = require('../middleware/auth')

const router = express.Router()

router.get('/tracks', auth, async (req, res) => {
    try {
        const tracks = await Track.find({ userId: req.user._id })
        console.log(tracks)
        tracks.forEach((track)=>{
            console.log(track)
        })
        res.send({tracks})
    } catch (e) {
        res.status(400).send({ error: e.message })
    }


})

router.post('/tracks', auth, async (req, res) => {
    console.log(req.body)
    const { name, locations } = req.body
    if (!name || !locations) {
        return res.status(404).send({ error: 'Please send track name, and locations, thanks :)' })
    }
    try {
        const track = new Track({ userId: req.user._id, name, locations })
        await track.save()
        res.status(201).send()
    } catch (e) {
        res.status(400).send({ error: e.message })
    }


})

module.exports = {
    router
}


