const mongoose = require('mongoose')

const jobScheama = new mongoose.Schema({

    companyName: {
        type: String
    },
    jobId: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        required: true
    },
    LastDate: {
        type: Date
    },
    job_description: {
        type: String,
    },
    skillRequired: {
        type: String,
    },
    experience: {
        type: Number,
        required: true
    },
    jobType: {
        type: String,
    }
    ,
    travelRequired: {
        type: Boolean
    }
    ,
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Jobs' , jobScheama )