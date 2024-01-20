const routes = require('express').Router();
const professionalController = require('../controllers');

routes.get('/', professionalController.getData);

module.exports = routes;