const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');

const corsOption = {
    origin: (origin, callback) =>
        (CORS_WHITELIST.indexOf(origin) !== -1)
            ? callback(null, true)
            : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
    app.use(cors(corsOption));
    app.use(bodyParser.json());
};

module.exports = configureServer;
