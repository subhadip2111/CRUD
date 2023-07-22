const express=require("express")
const mongoose=require("mongoose")
const bodyParser = require('body-parser');
const cors=require("cors")
const UserModel=require("./models/Users")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const cookieParser=require("cookie-parser")

const app=express()
app.use(cors({
  
    origin:'http://localhost:5173',
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
const secretKey = 'Subhadip-shee'; // Change this to a strong secret key in production
app.use(bodyParser.json());
//app.use(bodyParser.json());
mongoose.connect("mongodb+srv://subhadipshee20010521:6dSaGGurAy71XigZ@cluster0.n1sdh5w.mongodb.net/?retryWrites=true&w=majority")


app.post("/users",async(req,res)=>{
const {name,email,age,password}=req.body

bcrypt.hash(password,10)

  .then(hash=>{
    UserModel.create({name,email,age,password:hash})
    .then(user=>res.json({status:200,message:"Success"}))
.catch(err=>res.json(err))
  }).catch(err=>res.json(err))


})

//loging
 
app.post("/users/login",async(req,res)=>{
   
const {eamil,password}=req.body
const options = {
    expires: new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
   await UserModel.findOne({email:eamil})
.then(user=>{
    if(user){
bcrypt.compare(password,user.password,10,(err,response)=>{
    if(response){
const token =jwt.sign({email:user.email},"jwt-secret-key",{expiresIn:"1d"})
    res.cookie("token",token,options)
return res.json('success',token)

}else{
        return res.status(400).json("incorrect password")
    }
})


    }else{
        return res.status(404).json("User not found")
    }
})

})


 
app.get("/users",async(req,res)=>{
    await  UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))


})
app.get("/users/:id",async(req,res)=>{
    const id=req.params.id
    await UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
 app.put("/updateUsers/:id",async(req,res)=>{
    const id=req.params.id
    const {name,email,age,password}=req.body

    bcrypt.hash(password,10)
    
      .then(hash=>{
        UserModel.findByIdAndUpdate({_id:id},{name,email,age,password:hash},{new:true})
        .then(user=>res.json({status:200,message:"Successfully updated"}))
    .catch(err=>res.json(err))
      }).catch(err=>res.json(err))
    
   

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




