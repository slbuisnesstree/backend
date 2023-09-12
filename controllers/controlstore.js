const details = require('../models/storeitems')

const { default:mongoose } = require('mongoose')

const getitems = async (req,res) => {

    const items = await details.find({}).sort({ createdAt:-1 })

    res.status(200).json(items)

}

const getitem = async (req,res) => {

    const { id } = req.params

    const items = await details.findById(id)

    if(!items){
        res.status(404).json('empty list')
    }

    res.status(200).json(items)

}

const createitem = async (req,res) => {

    const {title,prize,description,phone,image,createId,itemsLeft,category} = req.body

    const user_id = req.user._id

    try {
        const items = await details.create({title,prize,description,phone,image,createId,itemsLeft,category,user_id})
        res.status(200).json(items)

    }catch (error) {

        res.status(404).json({ error:error.message })
        
    }
}

const deleteone = async (req,res) =>{

    const { id } = req.params

    const items = await details.findByIdAndDelete({_id:id})

    if(!items){
        res.status(404).json('empty list')
    }

    res.status(200).json(items)

}

const updateitem = async (req,res) => {

    const { id } = req.params

    const items = await details.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!items){
        res.status(404).json('empty list')
    }

    res.status(200).json(items)

}
const getMine = async (req, res) => {

    const user_id = req.user._id
    const mine = await details.find({ user_id })
    res.status(200).json(mine)
}

module.exports = {

    getitems,
    getitem,
    createitem,
    deleteone,
    updateitem,
    getMine

}
