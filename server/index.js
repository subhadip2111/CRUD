const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require("./models/Users")

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://subhadipshee20010521:6dSaGGurAy71XigZ@cluster0.n1sdh5w.mongodb.net/?retryWrites=true&w=majority")


app.post("/users",(req,res)=>{
    UserModel.create(req.body).then(users=> res.json(users)).catch((err)=>res.json(err))
})


app.get("/users",(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))


})
app.get("/users/:id",(req,res)=>{
    const id=req.params.id
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
 app.put("/updateUsers/:id",(req,res)=>{
    const id=req.params.id
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users=>res.json(users))
    .catch(err=>res.json(err)) 
 })



 app.delete("/deleteUsers/:id",(req,res)=>{

    const id=req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
 })
app.listen(3001,()=>{
    console.log("server running on port 3001")
})