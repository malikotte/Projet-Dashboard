const express = require('express');
const faker = require('faker'); // Simuler données 
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
var cors = require('cors');
const { Router } = require('express');
app.listen(3001, () => console.log('Listening on port 3001'));
app.use(cors());
mongoose.Promise = global.Promise;
const dbName = "api";
const dbUrl = `mongodb://localhost:27017/${dbName}`;
// Connexion à la DB

mongoose.connect(dbUrl, {
    useNewUrlParser: true

},
    () => console.log('Connexion effectuée !'));

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastName: String
}, {
    timestamps: true
})
var User = mongoose.model('User', userSchema);
// List Users
const users = [];
// Créer la version de notre api 
const versionApi = '/api/vl';
// Import Route 
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);
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
app.delete(`${versionApi}/users/:id`, (req, res) => {
    const id = req.params.id - 1;
    users.splice(id, 1);
    res.sendStatus(200);
})