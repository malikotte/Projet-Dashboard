const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');



router.get('/', (req, res, next) => {
    Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch(err => console.log(err))

});

router.post('/add', (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const statut = req.body.statut;
    console.log(req.body);
    newPost = new Post({
        firstname,
        lastname,
        statut
    });
    newPost.save()
        .then(post => {
            res.json(post);
        })
        .catch(err => console.log(err));
})

// Update post 
router.put('/update/:id', (req, res, next) => {
    //Grab the id of the post 
    let id = req.params.id;

    // Find the post by the ID from the database
    Post.findById(id)
        .then(post => {
            post.firstname = req.body.firstname;
            post.lastname = req.body.lastname;
            post.statut = req.body.statut;
            post.save()
                .then(post => {
                    res.send({
                        message: 'Post updated successfully',
                        status: 'success',
                        post: post
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
});

// Make delete request 
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Post.findById(id)
        .then(post => {

            post.delete()
                .then(post => {
                    res.send({ message: 'Post deleted successfully', status: 'success', post: post })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})
module.exports = router;