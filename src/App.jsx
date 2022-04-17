import React from 'react'
import Cart from './routes/Cart';
import Home from "./routes/Home";
import Login from './routes/Login';
import Product from './routes/Product';
import ProductList from './routes/ProductList';
import Register from './routes/Register';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
               
      </Routes>
    </Router>
  ) ;
};

export default App;