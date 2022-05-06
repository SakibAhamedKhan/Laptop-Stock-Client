import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home/Home';
import InventoryItems from './pages/Home/InventoryItems/InventoryItems';
import InventoryItemDetails from './pages/InventoryItemDetails/InventoryItemDetails/InventoryItemDetails';
import Login from './pages/LoginSignup/Login/Login';
import Signup from './pages/LoginSignup/Signup/Signup';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/inventory/:inventoryItemId' element={<InventoryItemDetails></InventoryItemDetails>}></Route>
        </Routes> 

        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        
    </div>
  );
}

export default App;
