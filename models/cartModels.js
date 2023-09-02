const { default:mongoose } = require('mongoose')

const schema = mongoose.Schema

const cartSchema = new schema({

    
    title:{
        type:String,
        required:true
    },
    prize:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    image:{
        type:String
    },
    user_id:{
        type:String,
        required:true
    }

},{timestamps:true}
)

module.exports = mongoose.model('cart', cartSchema)