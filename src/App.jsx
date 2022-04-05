import React from 'react'
import Cart from './routes/Cart';
import Home from "./routes/Home";
import Login from './routes/Login';
import Product from './routes/Product';
import ProductList from './routes/ProductList';
import Register from './routes/Register';

const App = () => {
  return<div>
<Home />
<Cart />
<Login />
<ProductList />
<Product />
<Register />

  </div>  ;
};

export default App;