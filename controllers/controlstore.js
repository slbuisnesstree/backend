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

module.exports = {

    getitems,
    getitem,
    deleteone,
    updateitem,

}
