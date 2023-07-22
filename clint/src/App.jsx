
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'

import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Login from './Login'

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
