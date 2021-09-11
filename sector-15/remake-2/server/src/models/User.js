const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema =new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre('save', async function (next) {
    const user = this
    try {
        if (user.isModified('password')) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(user.password, salt)

            user.password = hash
        }
    } catch (e) {
        throw new Error(e.message)
    }
    next()
})

userSchema.methods.comparePassword = async function (password) {
    const user = this
    try {
        const match = await bcrypt.compare(password, user.password)
        return match ? true : false
    } catch (e) {
        throw new Error(e.message)
    }
}

mongoose.model('user', userSchema)