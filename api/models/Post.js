const mongoose = require('mongoose');
var now = require("date-now");


const PostSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    statut: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});



const Post = module.exports = mongoose.model('Post', PostSchema);
