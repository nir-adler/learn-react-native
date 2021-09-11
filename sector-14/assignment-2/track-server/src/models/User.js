const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    const user = this
    if (!user.isModified('password')) {
        return next()
    }
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password, salt)
        user.password = hash
        next()
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
    //  bcrypt.genSalt(10, (err, salt) => {
    //     if (err) {
    //         return next(err)
    //     }

    //     bcrypt.hash(user.password, salt, (err, hash) => {
    //         if (err) {
    //             console.log('here4')
    //             return next(err)
    //         }
    //         user.password = hash
    //     })
    // })
})

userSchema.methods.comparePassword = function (password) {
    const user = this
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return reject(e.message)
            }
            if (!isMatch) {
                return reject(false)
            }

            resolve(true)
        })
    })
}

mongoose.model('user', userSchema)