const Router = require('express').Router()
const Controller = require('./../controller/transaction')

Router.post('/', Controller.onCheckOut)
Router.get('/:user_id', Controller.getDataTransaction)
Router.get('/detail/:transaction_id', Controller.getTransactionDetailByIdTransactionId)


module.exports = Router