const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')

const User = mongoose.model('user')


router.post('/signup', async (req,res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: 'Please Provide Email and Password' })
    }
    try {
        const user = new User({ email, password })
        await user.save()
        const token=jwt.sign({_id:user._id},'israel')
        res.send({token})
    } catch (e) {
        res.status(500).send(e.message)
    }
})


router.post('/signin',async(req,res)=>{
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: 'Please Provide Email and Password' })
    }
    try{
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).send({error:'User not found!'})
        }
        await user.comparePassword(password)
        const token=jwt.sign({_id:user._id},'israel')
        res.send({token})
    }catch(e){
        res.status(500).send(e.message)
    }

})










module.exports = {
    router
}