const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');
const path = require('path');
const dbName = "api";
const dbUrl = `mongodb://localhost:27017/${dbName}`;




// Connexion à la DB

mongoose.connect(dbUrl, {
    useNewUrlParser: true
},
    () => console.log('Connexion effectuée !'));


// Port

const port = process.env.PORT || 3001;

// Initi cors Middleware
app.use(cors());

// Initialize Body Parser Middleware

app.use(bodyParser.json());

// Initialize Public directory
/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})*/

app.get('/', (req, res) => {
    res.send('<h1>wes wes</h1>')
});

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log('Serveur started on port ', port)
});