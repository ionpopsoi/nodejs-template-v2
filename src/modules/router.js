/**
 * Import custom lib
 */
const config = require('../config');
const { routes } = require('../routers/Api');

class router {

    routesToRouter(router, routes, type) {
        for (let item = 0; item < routes.length; item += 1) {
            const route = routes[item];
            const controller = route.controller;
            let auth = '';
            if (route.isPrivateRoute) {
                //add jwt here
            }

            eval(`
                ${route.secured ? 'const basicAuth = require("express-basic-auth");' : ''}
                const ${route.controller}Controller = require('../controllers/${controller}Controller');
                router.${route.method}('${route.route}', ${auth} (req, res) => {
                    ${route.controller}Controller.${route.action}Action(req, res);
                });
            `);
        }
    }
}

module.exports = new router();