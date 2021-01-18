/**
 * Import packages
 */
const express = require('express');
const router = express.Router();
const routerUtils = require('../modules/router');

/**
 * Define routes
 */
const routes = [
    {
        route: '/',
        method: 'get',
        controller: 'API',
        action: 'index'
    }
];

routerUtils.routesToRouter(router, routes, 'API');

module.exports = { router, routes }