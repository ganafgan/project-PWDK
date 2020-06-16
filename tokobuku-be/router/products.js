const Router = require('express').Router()
const Controller = require('./../controller/products')

Router.get('/', Controller.getAllDataProducts)
Router.get('/:id', Controller.getProductById)
Router.post('/', Controller.postNewProduct)
Router.patch('/:id', Controller.editProduct)
Router.patch('/image/:product_id', Controller.editProductImageById)
Router.delete('/:id', Controller.deleteProduct)


module.exports = Router