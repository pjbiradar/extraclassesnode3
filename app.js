const express = require("express");
const router  = require("./routes");
const cors=require("cors")
const app=express()

app.use("/api/v1",router)
app.use(cors())

app.listen(4000,()=>{
    console.log("success hehad");
})