const Router = require('express').Router()
const Controller = require('./../controller/authors')

Router.get('/', Controller.getDataAuthors)
Router.post('/', Controller.postNewAuthor)
Router.get('/filtered', Controller.getAuthorFiltered)

module.exports = Router