const mongoose = require('mongoose')
const Schema = mongoose.Schema

const students = new Schema({
    student:{
        type: String,
        reqiuired: true
    },
    fruits:{
        type: Schema.Types.ObjectId,
        ref: "school"
    }
}, {timestamps: true})
module.exports = mongoose.model("fruit", students)
