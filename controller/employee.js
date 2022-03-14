const data=(req,res)=>{
    // console.log("***REQUEST******",req.query);
    console.log("***REQUEST******  params****",req.params);

    // v need to send the request in query params and can see in terminal the data
    const user=[
        
        {id:1,name:"pooja",category:"MERN"},
        {id:2,name:"penny",category:"mern"},
        {id:3,name:"leonard",category:"mern"}

    ]
    // res.send(user)
    if(req.query.id){
        const newUser=user.filter((value)=>value.id === Number(req.query.id))
        res.send(newUser);

    }else if(req.params.category){
        const newUser=user.filter((value)=>value.category === req.params.category)
        res.send(newUser);

    }
    else{
        res.send(user)
    }
}

// module.exports=data;
// if u r exporting like this then you import with data function only

module.exports.employeeget=data
// if u are exporting like this then you can access by using employeeget