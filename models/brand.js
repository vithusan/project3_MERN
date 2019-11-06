const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const BrandSchema = new Schema({
    name: String,
    description: String,
    imgUrl: String
})

const BrandCollection = mongoose.model('brand', BrandSchema)

const getAllBrand = () => {
    return BrandCollection.find({})
}

const getSingleBrand = (brandId) => {
    return BrandCollection.findById({ _id: brandId })
}

const createBrand = (brandData) => {
    return BrandCollection.create(brandData)
}

const updateBrand = (brandId, brandData) => {
    return BrandCollection.updateOne({ _id: brandId }, brandData)
}

const deleteBrand = (brandId) => {
    return BrandCollection.deleteOne({ _id: brandId })
}

module.exports = {
    getAllBrand,
    getSingleBrand,
    createBrand,
    updateBrand,
    deleteBrand
}