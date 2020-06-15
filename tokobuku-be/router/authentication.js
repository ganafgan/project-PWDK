const Router = require('express').Router()
const Controller = require('./../controller/authentication')

Router.post('/register', Controller.register)

Router.post('/login', Controller.login )


module.exports = Router
