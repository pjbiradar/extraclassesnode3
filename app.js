const express = require("express");
const router  = require("./routes");
const cors=require("cors")
const app=express()

app.use("/api/v1",router)
app.use(cors())
app.get('/user',(req,res)=>{
    res.send("hello")
})
app.put('/user',(req,res)=>{
    res.send("hello")
})
app.delete('/user',(req,res)=>{
    res.send("hello")
})
app.post('/user',(req,res)=>{
    res.send("hello")
})

app.listen(4000,()=>{
    console.log("success hehad");
})