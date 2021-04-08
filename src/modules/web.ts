import express from 'express';

import config from '../config';

class App {
    public init() {
        const app = express();

        app.use(express.json());
        app.use(express.urlencoded());

        app.listen(config.application.PORT, () => {
            console.log(`Service running on port ${config.application.PORT}`);
        })
    }
}

export default () => {
    return new App()
}