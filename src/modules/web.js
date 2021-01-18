/**
 * Import lib
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/**
 * Import custom lib
 */
const config = require('../config');
const log = require('./logger');
const indexRouter = require('../routers/Api');

class web {
    init() {

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        /**
         * Log tracker
         */
        app.use((req, res, next) => {

            next();
        });

        /**
         * Config Routes
         */
        app.use('/api', indexRouter.router);


        app.disable('x-powered-by');

        /**
         * Start Application
         */
        app.listen(config.application.port, config.application.host, () => {
            log.info(`[WEB] App is running on: ${config.application.host}:${config.application.port}`);
        })


    }
}

module.exports = new web();