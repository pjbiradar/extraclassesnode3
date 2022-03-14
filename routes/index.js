const express=require("express")
const employeeRouter=require("./employee")
// v can create many routes like department and so on

const router=express.Router()
router.use("/employee",employeeRouter)

module.exports=router