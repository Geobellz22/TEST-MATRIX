<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 }
  ]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Simulate checkout
    setCart([]);
    navigate('/order-history');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 }
  ]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Simulate checkout
    setCart([]);
    navigate('/order-history');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
>>>>>>> 17e709e417bb91a4e1743ca83d7ccd6b700e3d03
