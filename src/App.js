
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Ecommerce from './components/E-Commerce';
import Login from './headerComponent/Login'
import SignUpp from './headerComponent/SignUp'

function App() {
  
  return(
    <>
  
   
      <Routes>
  
        
  <Route path="/login" element={<Login/>}/>
  <Route path="/" element={<SignUpp/>} /> 
  <Route  path="/ecommerce" element={<Ecommerce/>}/>
  
   
 
</Routes>
    </>
 
  );
}

export default App;
