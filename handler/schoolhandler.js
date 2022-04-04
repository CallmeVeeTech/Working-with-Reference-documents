const schoolModel = require('../Model/schoolModel')

const postSchool = async (req, res)=>{
   try {
    const newSchool = await schoolModel.create({
        schoolName: req.body.schoolName
    })
    res.status(201).json({
        status: "success",
        data: newSchool
    })
   } catch (error) {
       res.json({
           error
       })
   }
}
//geting schools
const getSchools = async(req, res)=>{
    try {
        const schools = await schoolModel.find()
        if(!schools){
            res.status(404).json({
                status: "failed",
                message: "No school found"
            })
        }
        res.status(200).json({
            status: "success",
            data: schools
        })
    } catch (error) {
        res.json({
            error
        })
    }
}
//getOne school
const getSchool = async(req, res)=>{
    try {
        const school = await schoolModel.findById(req.params.id)
        if(!school){
            res.status(400).json({
                status: "failed",
                message: `school with id ${id} not found`
            })
        }
        res.status(200).json({
            status: "success",
            data: school
        })
    } catch (error) {
        console.log(error)
    }
}

const updateSchool = async(req, res)=>{
    try {
        id = req.params.id
        const school = await schoolModel.findByIdAndUpdate(id, {
            schoolName: req.body.schoolName
        },{new:true} )
        res.status(200).json({
            status: "success",
            data: school
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteSchool = async(req, res)=>{
    try {
        const school = await schoolModel.findByIdAndDelete(req.params.id)
        res.status(204)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postSchool,
    getSchools,
    getSchool,
    updateSchool,
    deleteSchool
}