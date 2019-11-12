const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: String,
    description: String,
    price: String,
    imgUrl: String,
    buyLink: String,
    brandId: String
})

const ItemCollection = mongoose.model('item', ItemSchema)

const getAllItem = () => {
    return ItemCollection.find({})
}

const getItemByBrand = (brandId) => {
    return ItemCollection.find({ brandId })
}

const getSingleItem = (itemId) => {
    return ItemCollection.findById({ _id: itemId })
}

const createItem = (itemData) => {
    return ItemCollection.create(itemData)
}

const updateItem = (itemId, itemData) => {
    return ItemCollection.updateOne({ _id: itemId }, itemData)
}

const deleteItem = (itemId) => {
    return ItemCollection.deleteOne({ _id: itemId })
}

module.exports = {
    getAllItem,
    getItemByBrand,
    getSingleItem,
    createItem,
    updateItem,
    deleteItem
}