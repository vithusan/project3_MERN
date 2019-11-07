const express = require('express')
const itemApi = require('../models/item.js')

const itemRouter = express.Router()

itemRouter.get('/', async (req, res) => {
    const allItem = await itemApi.getAllItem()
    res.json(allItem)
})

// itemRouter.get('/:itemId', (req, res) => {
//     itemApi.getSingleItem(req.params.itemId)
//         .then((res) => {
//             res.json(res)
//         })
// })

itemRouter.get('/:itemId', async (req, res) => {
    const singleItem = await itemApi.getSingleItem(req.params.itemId)
    res.json(singleItem)
})

itemRouter.post('/', async (req, res) => {
    const newItem = await itemApi.createItem(req.body)
    res.json(newItem)
})

itemRouter.put('/:itemId', async (req, res) => {
    const updatedItem = await itemApi.updateItem(req.params.itemId, req.body)
    res.json(updatedItem)
})

itemRouter.delete('/:itemId', async (req, res) => {
    const deletedItem = await itemApi.deleteItem(req.params.itemId)
    res.json(deletedItem)
})

module.exports = {
    itemRouter
}