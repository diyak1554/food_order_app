import React from 'react';

function DishCard({ name, price, onAdd }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      width: '250px',
      marginBottom: '10px'
    }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}

export default DishCard;
