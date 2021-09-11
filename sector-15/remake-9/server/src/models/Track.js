const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number
    }
})


const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})


mongoose.model('track', trackSchema)