const express = require('express')
const router = require('./api/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://admin:pass123@ds211613.mlab.com:11613/myphotos', {useNewUrlParser: true}, (err) => {
  if(err) console.log('Database Error')
})
mongoose.set('useCreateIndex', true)

router(app)




app.listen(8081, () => {
  console.log("Server Works!")
})
