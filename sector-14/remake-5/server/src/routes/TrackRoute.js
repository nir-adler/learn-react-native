const mongoose = require('mongoose')
const express = require('express')
const Track = mongoose.model('track')
const { auth } = require('../middleware/auth')

const router = express.Router()

router.post('/tracks', auth, async (req, res) => {
    const { name, locations } = req.body

    if (!name || !locations) {
        return res.status(422).send({ error: 'Missing data' })
    }
    try {
        const track = new Track({ userId: req.user._id, name, locations })
        await track.save()
        res.status(201).send()
    } catch (e) {
        console.log(e)
        res.status(422).send({error:JSON.stringify(e)})
    }
})


router.get('/tracks',auth,async(req,res)=>{
    try{
        const tracks=await Track.find({userId:req.user._id})
        res.send({tracks})
    }catch(e){
        console.log(e)
        res.status(400).send({error:e})
    }

})

module.exports = {
    router
}