const express = require('express')
const router = express.Router()


const mongoose = require('mongoose')
const User = mongoose.model('user')
const Track = mongoose.model('track')
const { auth } = require('../middlewares/auth')


router.get('/tracks', auth, async (req, res) => {
    try {
        const tracks = await Track.find({ userId: req.user._id })
        res.send(tracks)
    } catch (e) {
        res.status(500).send(e.message)
    }

})


router.post('/tracks', auth, async (req, res) => {
    try {
        const track = new Track({ ...req.body, userId: req.user._id })
        await track.save()
        res.status(201).send(track)
    } catch (e) {
        console.log(e)
        res.status(422).send(e.message)
    }

})


module.exports = {
    router
}