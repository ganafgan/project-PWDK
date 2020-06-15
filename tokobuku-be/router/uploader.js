const Router = require('express').Router()
const Controller = require('./../controller/uploader')

Router.post('/payment/:transaction_id', Controller.postPaymentConfirmation)
Router.post('/user-profile/:user_id', Controller.postUserProfilePict)
Router.post('/author-image/:id', Controller.postAuthorPict)
Router.post('/publisher-image/:id', Controller.postPublisherPict)

module.exports = Router