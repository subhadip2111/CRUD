import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
const CreateUser = () => {
const navigate=useNavigate()
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [age,setAge]=useState('')
const Submit=(e)=>{
e.preventDefault()

axios.post("http://localhost:3001/users",{name,email,age}).then(result=>{console.log(result)

navigate('/')}

).catch((err)=>console.log(err))

}
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Your Name" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Your Email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input type="text" placeholder="Enter Your Age" className="form-control" id="age" onChange={(e)=>setAge(e.target.value)} />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
