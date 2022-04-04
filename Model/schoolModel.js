const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schools = new Schema({
    schoolName:{
        type: String,
        required: true
    },
    studentFruitArray:[{
        type: Schema.Types.ObjectId,
        ref: "fruit"
    }]
}, {timestamps: true})

module.exports = mongoose.model("school", schools)