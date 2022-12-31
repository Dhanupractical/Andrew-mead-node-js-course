require("../src/db/mongoose");
const User = require("../src/model/user");

User.findByIdAndUpdate("63aac3e57a7a713e58d0201a", { age: 1 }).then((user) => {
  console.log(user);
  return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
