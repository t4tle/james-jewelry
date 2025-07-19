import React from 'react';
import { useCart } from '../context/CartContext';
import './JewelryGuide.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>Cart ({cart.length})</h3>
      {cart.length === 0 && <p>No items in cart.</p>}
      <ul>
        {cart.map(item => (
          <li key={item.jID}>
            {item.Name} - ${item.price}
            <button onClick={() => removeFromCart(item.jID)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">
            <strong>Total: </strong>
            ${total.toFixed(2)}
          </div>
    </div>
  );
};

export default Cart;