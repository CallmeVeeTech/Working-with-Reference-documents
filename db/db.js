const mongoose = require('mongoose')
const url = 'mongodb://localhost/studentsBestFruits'

mongoose.connect(url).then(()=>{
    console.log("database is connected successsfully")
}).catch((error)=>{
    console.log(error)
})

