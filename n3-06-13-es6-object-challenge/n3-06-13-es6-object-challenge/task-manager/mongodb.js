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

    // db.collection("users").findOne({ name: "jen", age: 1 }, (error, user) => {
    //   if (error) {
    //     return console.log("unable to fetch");
    //   }
    //   console.log(user);
    // });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

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

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("63a88d23a55fef73056c62ba") },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((err, tasks) => {
    //     console.log("incompleted tasks", tasks);
    //   });

    const updatePromise = db.collection("users").updateOne(
      {
        _id: new ObjectID("63a86d32c9a8b6a586bb02b8"),
      },
      {
        $inc: {
          age: 1,
        },
      }
    );

    updatePromise.then((result)=>{
      console.log('result',result)
    }).catch((error)=>{
      console.log('error',error)
    })
  }
);
