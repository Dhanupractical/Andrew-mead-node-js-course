const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api-test", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });

// const me = new User({
//   name: "Andrew",
//   age: 27,
// });

// me.save()
//   .then(() => {
//      console.log('success',me)
//   })
//   .catch((err) => {
//      console.log('error',err)
//   });

const Task = mongoose.model("Task", {
  // capital T in Task gets converted into small case t by mongoose
  decription: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({
  decription: "Learn the Mongoose Library",
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((err) => {
    console.log(err);
  });
