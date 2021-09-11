const mongoose=require('mongoose')

const pointSchema= new mongoose.Schema({
    timestamp:Number,
    coords:{
        latitude:Number,
        logitude:Number,
        altitude:Number,
        accuracy:Number,
        heading:Number,
        speed:Number
    }
})


const tackSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        default:''
    },
    locations:[pointSchema]

})


mongoose.model('track',tackSchema)