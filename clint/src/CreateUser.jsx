import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const CreateUser = () => {
const navigate=useNavigate()
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [age,setAge]=useState('')
const [password,setPassword]=useState('')
const Submit=(e)=>{

if(!name ||!email ||!age ||!password){
  alert("please give all inputs")
  return 
}

if(!/^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(email)){
  alert("invalid Email ")
  return 
}
if(password.length<8){
  alert(" !!password must be grater than 8")
}


e.preventDefault()
axios.post("http://localhost:3001/users",{name,email,age,password}).then(result=>{console.log(result)



navigate('/login')}  

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
          <div className="mb-2">
            <label htmlFor="age">Password</label>
            <input type="text" placeholder="Enter Your password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button className="btn btn-success">Register</button>

          <p>Already Have An account</p>
          <Link to="/login"className="btn btn-default w-100 rounded-0  btn btn-outline-success"  >Login</Link>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
