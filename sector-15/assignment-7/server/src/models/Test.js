const mongoose = require('mongoose')

const subSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const subDocumentSchema = new mongoose.Schema({
    child: [subSchema]
})
const Subdoc = mongoose.model('Subdoc', subDocumentSchema)

const test = async () => {
    try {
        await Subdoc.deleteMany({})

        const item1 = new Subdoc({
            child:[ {
                name: 'nir',
                age:10
            },{
                name:'guy',
                age:20
            }]
        })
        await item1.save()
        const items=await Subdoc.find({})
        console.log(items[0].child)
    } catch (e) {

    }

}


test()

