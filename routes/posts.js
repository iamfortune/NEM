const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
  res.send("We are on post");
});


router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
    .then( data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err })
    })
});


module.exports = router;