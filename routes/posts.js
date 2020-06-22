const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/Post');
router.get('/', (req, res) => {
    res.send("We are on post");
});
router.post('/', (req, res) => {
    const post = {
        title: req.body.title,
        description: req.body.description
    };
    console.log(post)
    new Post(post)
        .save()
        .then(data => {
            res.json(data);
            console.log(data);
        })
        .catch(err => {
            res.json({ message: err })
        })
});
module.exports = router;
