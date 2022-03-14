const express=require("express")
const empcontroller=require("../controller/employee")
// empcontroller is variablename

const employeeRouter=express.Router();
employeeRouter.route("/details").get(empcontroller.employeeget)



    //v dont have to change the route when v are passing the data from front end in the form of query param,
    // because v can access those values using keys which is part of query param only.


    //but in case of url params you will have to modify the route ,because we need a key access
    //  the value from url 
employeeRouter.route("/details/:category").get(empcontroller.employeeget)


module.exports=employeeRouter    