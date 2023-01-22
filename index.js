const express = require('express')
const jobsRoutes = require('./routes/jobsRoutes')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
require('./db/conn')
const PORT = process.env.PORT||5000
const app = express()

app.use(express.json())

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts))

app.use(jobsRoutes)


app.listen( PORT , () => {

    console.log(`server running at ${PORT}`)
     
})