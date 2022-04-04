const express = require('express')
const location = express.Router()
const {newStudent, getAllstudents} = require('../handler/studentHandler')

location.route('/school/:id/student')
    .post(newStudent)
location    
    .route('/school/:id')
    .get(getAllstudents)

module.exports = location