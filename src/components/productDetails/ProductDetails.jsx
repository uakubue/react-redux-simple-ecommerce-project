import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CardLoaderPage from '../loadPage/cardLoader/CardLoaderPage';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to hold product details

  useEffect(() => {
    // Fetch product details using the ID
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`); // Replace with your API endpoint
        const data = await response.json();
        setProduct(data); // Set the product details in state
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]); // Dependency array to re-run effect if id changes

  return (
    <div>
      {product ? (
        <div>
            <h3>{product.title}</h3>
            <div>
                <img src={product.image} alt="" />
            </div>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <span>{product.id}</span>

            <div>
                <Link to="/">
                    <button>Back to Products</button>
                </Link>
            </div>
        </div>
        
      ) : (
        <p><CardLoaderPage /></p> // Loading state
      )}
    </div>
  );
};

export default ProductDetails;