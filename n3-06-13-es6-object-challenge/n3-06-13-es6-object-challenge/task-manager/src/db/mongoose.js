const mongoose = require("mongoose");
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api-test", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const UserNew = mongoose.model('UserNew', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate(value){
       if (!validator.isEmail(value)){
            throw new Error('Email is invalid')
       }
    }
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
          throw new Error('Age must be a positive number')
      }
    }
  }
})

const meNew = new UserNew({
  name: 'Dhananjaya',
  email: 'mike@'
})

meNew.save().then(()=>{
  console.log(me)
}).catch((err)=>{
  console.log(err)
})
