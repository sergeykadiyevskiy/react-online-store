import React from 'react'
import Cart from './routes/Cart';
import Home from "./routes/Home";
import Login from './routes/Login';
import Product from './routes/Product';
import ProductList from './routes/ProductList';
import Register from './routes/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:category' element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>} />
        <Route path='/register' element={user ? <Navigate to="/"/> : <Register/>}/>
      </Routes>
    </Router>
  ) ;
};

export default App;