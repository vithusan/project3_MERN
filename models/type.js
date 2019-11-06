const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const TypeSchema = new Schema({
    name: String,
    description: String,
    ImgUrl: String
})

const TypeCollection = mongoose.model("type", TypeSchema)

const getAllType = () => {
    return TypeCollection.find({})
}

const getSingleType = (typeId) => {
    return TypeCollection.findById({ _id: typeId })
}

const createType = (typeData) => {
    return TypeCollection.create(typeData)
}

const updateType = (typeId, typeData) => {
    return TypeCollection.updateOne({ _id: typeId }, typeData)
}

const deleteType = (typeId) => {
    return TypeCollection.deleteOne({ _id: typeId })
}

module.exports = {
    getAllType,
    getSingleType,
    createType,
    updateType,
    deleteType
}