const express = require('express')
const jobsRoutes = require('./routes/jobsRoutes')
const dotenv = require('dotenv')

dotenv.config()
require('./db/conn')
const PORT = process.env.PORT||5000
const app = express()

app.use(express.json())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(jobsRoutes)


app.listen( PORT , () => {

    console.log(`server running at ${PORT}`)
     
})