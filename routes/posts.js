const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("We are on post");
});




module.exports = router;