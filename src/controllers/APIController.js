/**
 * import lib
 */
const baseController = require('../modules/baseController');

class APIController extends baseController {
    constructor() {
        super();
    }

    indexAction(req, res) {
        this.jsonResponse(res, 200, { 'message': 'Default API route!' });
    }
}

module.exports = new APIController();