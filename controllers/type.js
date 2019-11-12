const express = require('express')
const typeApi = require('../models/type.js')


const typeRouter = express.Router()

typeRouter.get('/', async (req, res) => {
    const allType = await typeApi.getAllType()
    res.json(allType)
})

typeRouter.get('/:typeId', async (req, res) => {
    const singleType = await typeApi.getSingleType(req.params.typeId)
    res.json(singleType)
})

typeRouter.post('/', async (req, res) => {
    const newType = await typeApi.createType(req.body)
    res.json(newType)
})

typeRouter.put('/:typeId', async (req, res) => {
    const updatedType = await typeApi.updateType(req.params.typeId, req.body)
    res.json(updatedType)
})

typeRouter.delete('/:typeId', async (req, res) => {
    const deletedType = await typeApi.deleteType(req.params.typeId)
    res.json(deletedType)
})

module.exports = {
    typeRouter
}