// src/MainSection/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  const { productId } = useParams();
  
  // Dummy data, replace with data fetching logic
  const productList = [
    { id: 1, name: 'Product 1', price: '$30.00', description: 'Description of Product 1', image: '/src/assets/store1.webp' },
    { id: 2, name: 'Product 2', price: '$50.00', description: 'Description of Product 2', image: 'path_to_image2' },
    // Add more products as needed
  ];

  const product = productList.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
