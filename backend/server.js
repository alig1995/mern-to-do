const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const server = express();
const port = 5000;

server.get("/", (req, res) => res.send("Hello World!"));

// server.get('/api/users', (req, res) => {
//   MongoClient.connect('mongodb://localhost:27017/REACTCA2', function (err, client) {
//     if (err) throw err

//     const db = client.db('REACTCA2')

//     db.collection('Users').find().toArray(function (err, result) {
//       if (err) throw err

//       res.send(result);
//     })
//   })
// });
server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
