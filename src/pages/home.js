import React from 'react';
import RestaurantCard from '../components/restaurantcard';

const dummyRestaurants = [
  {
    id: 1,
    name: "Spice Villa",
    cuisine: "Indian",
    rating: 4.5,
    image: "https://source.unsplash.com/300x200/?indian-food"
  },
  {
    id: 2,
    name: "Pasta Point",
    cuisine: "Italian",
    rating: 4.2,
    image: "https://source.unsplash.com/300x200/?pasta"
  },
  {
    id: 3,
    name: "Sushi World",
    cuisine: "Japanese",
    rating: 4.8,
    image: "https://source.unsplash.com/300x200/?sushi"
  }
];

function Home() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {dummyRestaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}                   // ✅ Pass the ID here
          name={restaurant.name}
          cuisine={restaurant.cuisine}
          rating={restaurant.rating}
          image={restaurant.image}
        />
      ))}
    </div>
  );
}

export default Home;
