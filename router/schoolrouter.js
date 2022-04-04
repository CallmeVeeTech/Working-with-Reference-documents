const express = require('express')
const direction = express.Router()
const { postSchool, getSchools, getSchool, updateSchool, deleteSchool} = require('../handler/schoolhandler')
direction
    .route('/school')
    .post(postSchool)
    .get(getSchools)
direction
    .route('/school/:id')
    .get(getSchool)
    .patch(updateSchool)
    .delete(deleteSchool)
module.exports = direction