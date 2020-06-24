const Router = require('express').Router()
const Controller = require('./../controller/statusTrans')

Router.get('/', Controller.getTransactionStatus)


module.exports = Router