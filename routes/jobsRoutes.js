const express = require('express')
const Jobs = require('../models/jobModel')

const router = express.Router()


router.get('/job' , async (req,res) => {
   
    try {
        const jobData = await Jobs.find({})
        res.status(201).send(jobData)
      } catch (e) {
        res.status(501).send(e)
      } 


})

router.post('/job' , async (req,res) => {   
    const jobData = new Jobs(req.body)
    try {
      await jobData.save()
      res.status(201).send(jobData)
    } catch (e) {
      res.status(400).send(e)
    }
})

module.exports = router