import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h3>Cart ({cart.length})</h3>
      {cart.length === 0 && <p>No items in cart.</p>}
      <ul>
        {cart.map(item => (
          <li key={item.jID}>
            {item.Name} - {item.price}
            <button onClick={() => removeFromCart(item.jID)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;