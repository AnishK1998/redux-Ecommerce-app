import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Components/HomePage/Homepage';
import CartPage from './Components/Cart/CartPage';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <>
   <Navbar />
   <BrowserRouter >
      <Routes >
        <Route path='/' element={<Homepage />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
