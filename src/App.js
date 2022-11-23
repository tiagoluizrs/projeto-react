import { lazy, Suspense, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Loading from './components/loading/loading';

const Login = lazy(() => import('./pages/auth/login/login'))
const Register = lazy(() => import('./pages/auth/register/register'));
const Cart = lazy(() => import('./pages/cart/cart'));
const Catalog = lazy(() => import('./pages/catalog/catalog'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));
const NotFound = lazy(() => import('./pages/not-found/not-found'));
const Product = lazy(() => import('./pages/product/product'));

function App() {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/">Catálogo</Link>
          </li>
          <li>
            <Link to="/cart">Carrinho</Link>
          </li>
          <li>
            <Link to="/product/1">Produto</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </header>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Catalog />}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
