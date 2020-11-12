const express = require('express');
const faker = require('faker'); // Simuler données 
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');
app.listen(3001, () => console.log('Listening on port 3001'));
app.use(cors());

// List Users
const users = [];
// Créer la version de notre api 
const versionApi = '/api/vl';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// GET /api/v1/users

app.get(`${versionApi}/users`, (req, res) => {
    res.json({
        data: users
    })
});

// GET /api/v1/users/:id

app.get(`${versionApi}/users/:id`, (req, res) => {
    const id = req.params.id - 1;

    res.json({
        data: users[id] || null
    })
})
// POST /api/v1/users
app.post(`${versionApi}/users`, (req, res) => {
    const data = req.body;
    users.push(data);

    console.log(data);
    res.json({
        index: users.length,
        data: users[users.length - 1]
    })
})

// PUT /api/v1/users/:id

// DELETE /api/v1/users/:id
