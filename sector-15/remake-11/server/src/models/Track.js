const mongoose = require('mongoose')

const pointSchema = mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})


mongoose.model('track',trackSchema)