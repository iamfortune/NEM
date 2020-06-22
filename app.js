const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
app.use(express.json());
// Import Routes 
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
// ROUTES 
app.get('/', (req, res) => {
	res.send('We are on home');
});
// Connect to DB 
mongoose.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, () =>
	console.log("Connected to the DB!")
);
app.listen(4000);
