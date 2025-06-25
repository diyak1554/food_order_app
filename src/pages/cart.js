import React, { useContext } from 'react';
import { CartContext } from '../context/cartcontext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.name} - ₹{item.price}
                <button
                  onClick={() => removeFromCart(index)}
                  style={{ marginLeft: '10px' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button onClick={() => alert('Order placed!')}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
