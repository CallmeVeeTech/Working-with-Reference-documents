require('./db/db')
const express = require('express')
const studentFruitsApp = express()
const port = process.env.PORT || 2022
const schoolRoute = require('./router/schoolrouter')
const studentRoute = require('./router/studentRouter')

studentFruitsApp.use(express.json())
studentFruitsApp.use("/", schoolRoute)
studentFruitsApp.use("/", studentRoute)


studentFruitsApp.get('/', (req, res)=>{
    res.send("This databse shows set05 students and their best fruits")
})

studentFruitsApp.listen(port, ()=>{
    console.log(`studentFruitsApp is listening to port ${port}`)
})


