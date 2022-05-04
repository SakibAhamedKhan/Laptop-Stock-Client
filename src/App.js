import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/LoginSignup/Login/Login';
import Signup from './pages/LoginSignup/Signup/Signup';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>  
    </div>
  );
}

export default App;
