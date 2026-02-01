
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import './App.css'
import ProtectedRoute from './Components/ProtectedRoute'
import Login from './Components/Login'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Tasks from './Pages/Tasks'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/tasks' element={
        <ProtectedRoute>
          <Tasks/>
        </ProtectedRoute>}
        />
      


      </Routes>
   
    
    </BrowserRouter>
  )
}

export default App
