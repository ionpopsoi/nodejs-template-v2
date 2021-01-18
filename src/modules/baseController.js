class BaseController {
    constructor() {

    }

    jsonResponse(response, status, data, contentType = 'application/json') {
        response.type(contentType);
        response.status(status);
        response.json(data);
    }
}

module.exports = BaseController;