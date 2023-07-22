//import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
const UpdateUser = () => {

const {id}=useParams()
const navigate=useNavigate()
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [age,setAge]=useState('')
const [password,setPassword]=useState('')
useEffect(()=>{
  axios.get("http://localhost:3001/users/"+id)
  .then(result=>{(console.log(result))
  
    setName(result.data.name)
    setEmail(result.data.email)
    setAge(result.data.age)
    setPassword(result.data.password)
  })
  .catch(err=>console.log(err))
},[setName,setEmail,setAge,id,setPassword])

const update=(e)=>{
  if(!name ||!email ||!age ||!password){
    alert("please give  inputs for update")
    return 
  }

  if(!/^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(email)){
    alert("invalid Email ")
    return 
  }
  if(password.length<8){
    alert(" !!password must be grater than 8 digit")
    return
  }
if(name ||email || age || password){
  alert("document updated successfully")
}
e.preventDefault()

  axios.put("http://localhost:3001/UpdateUsers/"+id,{name,email,age,password})
  .then(result=>{console.log(result)
  
  navigate('/')}
  
  ).catch((err)=>console.log(err))
  
}



  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={update}>
        <h2>Update User</h2>
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Your Name" className="form-control" id="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter Your Email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-2">
          <label htmlFor="age">Age</label>
          <input type="text" placeholder="Enter Your Age" className="form-control" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label htmlFor="age">Password</label>
            <input type="text" placeholder="Enter Your password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser