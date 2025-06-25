import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DishCard from '../components/dishcard';
import { CartContext } from '../context/cartcontext';

const dummyMenus = {
  1: [
    { name: 'Butter Chicken', price: 250 },
    { name: 'Paneer Tikka', price: 180 }
  ],
  2: [
    { name: 'Spaghetti Alfredo', price: 220 },
    { name: 'Margherita Pizza', price: 200 }
  ],
  3: [
    { name: 'Sushi Roll', price: 300 },
    { name: 'Miso Soup', price: 120 }
  ]
};

function Menu() {
  const { id } = useParams();
  const dishes = dummyMenus[id] || [];
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Menu for Restaurant #{id}</h2>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {dishes.map((dish, index) => (
          <DishCard
            key={index}
            name={dish.name}
            price={dish.price}
            onAdd={() => addToCart(dish)}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
