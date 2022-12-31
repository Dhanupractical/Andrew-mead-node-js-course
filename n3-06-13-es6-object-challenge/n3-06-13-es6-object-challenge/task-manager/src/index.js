const express = require('express')
require('./db/mongoose')
const User = require('./model/user')
const Task = require('./model/task')


const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/tasks', (req, res)=>{
   const task = new Task(req.body)

   task.save().then(()=>{
      res.sendStatus(201).send(task)
   }).catch((e)=>{
      res.sendStatus(400).send(e)
   })
})

app.post('/users', (req, res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
       res.send(user)
    }).catch((e)=>{
        res.sendStatus(400).send(e)
    })
})

app.get('/users', (req, res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch(()=>{})
})

app.get('/users/:id', (req, res)=>{
    const _id = req.params.id
     User.findById(_id).then((user)=>{
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
     }).catch((e)=>{
        res.sendStatus(500).send(e)
     })
})

app.listen(port, ()=>{
    console.log('server is up on port '+ port)
})