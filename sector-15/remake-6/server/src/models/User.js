const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})


userSchema.methods.comparePassword = async function (password) {
    const user = this
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw new Error('Please authenticate')
    }
  
    return true
}

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password, salt)
        user.password = hash

    }
    next()
})

mongoose.model('user', userSchema)