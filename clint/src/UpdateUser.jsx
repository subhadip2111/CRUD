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

useEffect(()=>{

  axios.get("http://localhost:3001/users/"+id)
  .then(result=>{(console.log(result))
  
    setName(result.data.name)
    setEmail(result.data.email)
    setAge(result.data.age)
  })
  .catch(err=>console.log(err))
},[setName,setEmail,setAge,id])

const update=(e)=>{
  e.preventDefault()

  axios.put("http://localhost:3001/UpdateUsers/"+id,{name,email,age})
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
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser