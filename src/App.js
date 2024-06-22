import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () => <div>Home Component</div>;
const Login = () => <div>Login Component</div>;
const Register = () => <div>Register Component</div>;
const Profile = () => <div>Profile Component</div>;
const ProductList = () => <div>Product List Component</div>;
const Cart = () => <div>Cart Component</div>;
const OrderHistory = () => <div>Order History Component</div>;
const OrderTracking = () => <div>Order Tracking Component</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/login">Login</Link> | 
            <Link to="/register">Register</Link> | 
            <Link to="/profile">Profile</Link> | 
            <Link to="/products">Products</Link> | 
            <Link to="/cart">Cart</Link> | 
            <Link to="/order-history">Order History</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
