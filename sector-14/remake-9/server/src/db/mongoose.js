const mongoose=require('mongoose')

const url='mongodb+srv://taskapp:Ride2021up2022@cluster0.ezxmq.mongodb.net/tracks?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
   console.log('mongoose connected successfully')
})
.catch((e)=>{
    console.log(e)
})