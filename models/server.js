
const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/users';

        // Middleware
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {

        // Cors
        this.app.use(cors());
        // read and parse json from body
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usersRoutePath, require('../routes/user.routes'));


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}

module.exports = Server;
