const express = require('express')
const brandApi = require('../models/brand.js')

const brandRouter = express.Router()

brandRouter.get('/type/:typeId', async (req, res) => {
    const allBrandByType = await brandApi.getAllBrandByType(req.params.typeId)
    res.json(allBrandByType)
})


brandRouter.get('/', async (req, res) => {
    const allBrand = await brandApi.getAllBrand()
    res.json(allBrand)
})

brandRouter.get('/:brandId', async (req, res) => {
    const singleBrand = await brandApi.getSingleBrand(req.params.brandId)
    res.json(singleBrand)
})

brandRouter.post('/', async (req, res) => {
    const newBrand = await brandApi.createBrand(req.body)
    res.json(newBrand)
})

brandRouter.put('/:brandId', async (req, res) => {
    const updatedBrand = await brandApi.updateBrand(req.params.brandId, req.body)
    res.json(updatedBrand)
})

brandRouter.delete('/:brandId', async (req, res) => {
    const deletedBrand = await brandApi.deleteBrand(req.params.brandId)
    res.json(deletedBrand)
})

module.exports = {
    brandRouter
}