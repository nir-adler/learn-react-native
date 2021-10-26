


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
