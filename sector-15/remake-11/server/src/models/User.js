const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


schema.pre('save', async function (next) {
    const user = this
    try {
        if (user.isModified('password')) {
            const salt = await bcrypt.genSalt(8)
            const hash = await bcrypt.hash(user.password, salt)
            // console.log(hash)
            user.password = hash
        }
        next()
    } catch (e) {
        console.log(e)
    }
})

schema.methods.comparePassword = async function (password) {
    const user=this
    try {
        const match=await bcrypt.compare(password,user.password)
        if(!match){
            throw new Error('Password Incorrect')
        }
        return true
    } catch (e) {
        throw e
    }
}

mongoose.model('user', schema)


