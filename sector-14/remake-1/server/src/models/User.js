const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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

userSchema.methods.comparePassword = async function(password){
    const user = this
    try {
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return false
        }
        return true
    } catch (e) {
        console.log(e.message)
    }
}


userSchema.pre('save', async function (next) {
    const user = this
    try {
        if (!user.isModified('password')) {
            return next()
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password, salt)
        console.log(hash)
        user.password = hash
        next()
    } catch (e) {
        console.log(e.message)
    }
})

mongoose.model('user', userSchema)