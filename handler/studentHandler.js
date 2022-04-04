const schoolData = require('../Model/schoolModel')
const studentData = require('../Model/studentModel')

const newStudent = async(req, res)=>{
    try {
        const schoolId = req.params.id
        const school = await schoolData.findById(schoolId)
        const stud = new studentData(req.body)
        stud.fruits = school
        stud.save()
        school.studentFruitArray.push(stud)
        school.save()
        res.status(201).json({
            status: "success",
            data: school
        })
    } catch (error) {
        console.log(error);
        res.json({
            error
        })
    }}

const getAllstudents = async(req, res)=>{
    try {
        schoolId = req.params.id
    const school = await schoolData.findById(schoolId).populate('studentFruitArray')
    res.status(200).json({
        status: "success",
        data: school
    })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error
        })
    }
}
module.exports = {
    newStudent,
    getAllstudents
}