
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'

import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Login from './Login'

//import Logout from './Logout'
function App() {
  
  return (
    <>
<div>

<BrowserRouter>
  <Routes>
    <Route path='/' element={<User/>}></Route>

    <Route path='/create' element={<CreateUser/>}></Route>
    <Route path='/update/:id' element={<UpdateUser/>}></Route>

   
    <Route path='/login' element={<Login/>}></Route>
  </Routes>
</BrowserRouter>


</div>
    </>
  )
}

export default App

///---------------
// App.js
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { AuthProvider, useAuthContext } from './AuthContext';
// import Login from './Login';
// import Logout from './Logout';

// function App() {
//   const auth = useAuthContext();

//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {auth.authenticated ? (
//             <li>
//               <Logout />
//             </li>
//           ) : (
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           )}
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/login" component={Login} />
//         {/* Add other routes for different pages */}
//         {/* For example: <Route path="/dashboard" component={Dashboard} /> */}
//         <Route exact path="/" render={() => <h1>Welcome to the Home Page</h1>} />
//       </Switch>
//     </Router>
//   );
// }

// function Root() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }

// export default Root;

