import React, { useState } from 'react';

// Sample data for products
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Product component
const Product = ({ product, onAddToCart }) => (
  <div>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
);

// Cart component
const Cart = ({ cart }) => (
  <div>
    <h2>Cart</h2>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  </div>
);

// App component
const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>E-commerce App</h1>
      <div>
        <h2>Products</h2>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;
