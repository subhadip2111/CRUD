// 
import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const [users, setUsers] = useState([]);


  useEffect(()=>{

    axios.get("http://localhost:3001/users").then(result=>setUsers(result.data)).catch(err=>console.log(err))
  },[])

  const handleDelete=(id)=>{
   axios.delete("http://localhost:3001/deleteUsers/"+id) 
   .then(res=>{console.log(res)
window.location.reload()
})
   .catch(err=>{console.log(err)})
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add+</Link>
        
        
        <h1>User List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.Email}</td>
                <td>{user.age}</td>
                <td>
                <Link to={`/update/${user._id}` }className="btn btn-success">Update</Link>
<button className="btn btn-danger" onClick={()=>handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
