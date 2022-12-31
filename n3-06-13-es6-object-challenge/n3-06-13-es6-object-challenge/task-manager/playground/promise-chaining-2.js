require('../src/db/mongoose')
const Task = require('../src/model/task')

Task.findByIdAndDelete("63b034feac97553810e870f1").then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((count)=>{
    console.log(count)
})