const path = require('path')
const express = require("express");
const hbs = require('hbs')

const app = express()

// define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
   res.render('index', {
    title: 'weather app',
    name: 'dhananjaya'
   })
})

app.get('/about', (req, res) => {
  res.render('about', {
      title: 'About Me',
      name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
      helpText: 'This is some helpful text.',
      title: 'Help',
      name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.get('/help/*', (req, res)=>{
   res.render('404',{
    errorMessage: 'Help article not found'
   })
})

app.get('*', (req, res)=>{
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'page not found'
  })
})

app.listen(3000, () => {
  console.log("server is up on port 3000.");
});
