const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
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
}, () => {
	//Check connection state 1 = connected 0 = not connected
	console.log(mongoose.connection.readyState)
	console.log("Connected to the DB!")
});
// Production compatible port declaration
const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
