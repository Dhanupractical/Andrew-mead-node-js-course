// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";


MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection('users').findOne({ name: 'jen' }, (error, user)=>{
        if (error) {
            return console.log('unable to fetch')
        }
        console.log(user)
    })

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Vikram",
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log("here is reult", result.insertedId);
    //   }
    // );

    // db.collection('users').insertMany([
    //     {
    //         name: 'jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result)=>{
    //     if(error) {
    //         return console.log('Unable to insert document!')
    //     }
    //     console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('unable')
    //     }
    //     console.log(result.insertedIds)
    // })
  }
);
