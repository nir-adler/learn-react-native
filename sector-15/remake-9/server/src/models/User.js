const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.methods.comparePassword = async function (password) {
    const user = this

    const match = await bcrypt.compare(password, user.password)
    console.log(match)
    if (!match) {
        throw new Error('Invalid credentials')
    }
    return true
}


userSchema.pre('save', async function (next) {
    const user = this
    try {
        if (user.isModified('password')) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(user.password, salt)
            user.password = hash
        }
        next()
    } catch (e) {
        console.log(e)
    }
})

mongoose.model('user', userSchema)