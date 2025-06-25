import React from 'react';
import { useNavigate } from 'react-router-dom';

function RestaurantCard({ id, name, cuisine, rating, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        width: '300px',
        cursor: 'pointer'
      }}
    >
      <img src={image} alt={name} width="100%" height="180px" style={{ borderRadius: '8px' }} />
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Rating: ⭐ {rating}</p>
    </div>
  );
}

export default RestaurantCard;
