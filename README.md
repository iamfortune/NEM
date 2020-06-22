mongodb+srv://user:
<password>@cluster0-lmn2a.mongodb.net/
<dbname>?retryWrites=true&w=majority

IP ADDRESS
105.112.96.108

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:<password>@cluster0-lmn2a.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});