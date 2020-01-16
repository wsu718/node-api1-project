const express = require('express');

const Users = require('./data/db.js');

const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

// Get

server.get('/api/users', (req, res) =>
    Users
        .find()
        .then(userList => res.status(200).json(userList))
        .catch(error =>
            res
                .status(500)
                .json({ errorMessage: "The users information could not be retrieved." })
        )
);

server.get('/api/users/:id', (req, res) =>
    Users
        .findById(req.params.id)


)

