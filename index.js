const express = require('express');

const MongoClient = require('mongodb').MongoClient;


const password = 'UMZevDLRDB9ftSZ';

const uri = "mongodb+srv://organicUser:UMZevDLRDB9ftSZ@cluster0.pptbt.mongodb.net/organicdb?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });



const app = express();

app.get('/', (req, res) => {
    res.send("I am working")

})



client.connect(err => {
  const collection = client.db("organicUser").collection("products");
  console.log(database)
  client.close();
});

 app.listen(3000);