const Router = require('express').Router()
const Controller = require('./../controller/cart')

Router.post('/', Controller.addToCart)
Router.get('/:id_user', Controller.getDataCart)
Router.patch('/:id', Controller.updateQtyCart)
Router.delete('/:id', Controller.deleteCart)


module.exports = Router