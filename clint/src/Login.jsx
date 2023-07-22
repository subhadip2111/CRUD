

import axios from "axios";
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    //const [age,setAge]=useState('')
    const [password,setPassword]=useState('')

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

  const handleSubmit = (e) => {
   
      
      if(!/^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(email)){
        alert("invalid Email ")
        return 
      }
      if(password.length<8){
        alert(" !!password must be grater than 8")
      }
      
      
      e.preventDefault()


      axios.defaults.withCredentials=true;
      axios.post("http://localhost:3001/users/login",{email,password}).then(result=>{console.log(result)
      
      console.log(result.data)
      
      navigate('/')}  
      
      ).catch((err)=>console.log(err))
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Your Email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        
          <div className="mb-2">
            <label htmlFor="age">Password</label>
            <input type="text" placeholder="Enter Your password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          
            
            <Link to="/" type="submit" className="btn btn-primary">
            LOGIN
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
