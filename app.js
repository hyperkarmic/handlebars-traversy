const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000

//Database
const db = require('./config/database')

//TEST db
db.authenticate()
  .then(() => console.log('database connected'))
  .catch((err) => console.log('error: ' + err))

app.get('/', (req, res) => res.send('INDEX'))

// Gig routes
app.use('/gigs', require('./routes/gigs'))

app.listen(PORT, console.log(`Server started on port ${PORT}`))
