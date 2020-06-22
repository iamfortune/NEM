const express = require('express');
const app = express();
const mongoose = require('mongoose');

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Fortune:kaycodev20@cluster0-lmn2a.mongodb.net/NEM?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// ROUTES 
app.get('/', (req, res) => {
    res.send('We are on home');
});


app.get("/posts", (req, res) => {
  res.send("We are on post");
});

// Connect to DB 
mongoose.connect(
  "mongodb+srv://Fortune:kaycodev20@cluster0-lmn2a.mongodb.net/NEM?retryWrites=true&w=majority", 
  { useNewUrlParse: true }, 
    () => console.log('Connected to the DB!')
);

app.listen(4000);