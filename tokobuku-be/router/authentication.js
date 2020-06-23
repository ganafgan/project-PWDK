const Router = require('express').Router()
const Controller = require('./../controller/authentication')

Router.post('/register', Controller.register)
Router.post('/verify', Controller.verify)
Router.post('/login', Controller.login )
Router.post('/otp', Controller.resendOtp)


module.exports = Router
