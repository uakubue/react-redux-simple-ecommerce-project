import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CardLoaderPage from '../loadPage/cardLoader/CardLoaderPage';
import "./ProductDetails.css"
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../CartSlice';
import { FaNairaSign } from "react-icons/fa6";


const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to hold product details
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);

  useEffect(() => {
    // Fetch product details using the ID
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`); 
        const data = await response.json();
        setProduct(data); // Set the product details in state
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]); // Dependency array to re-run effect if id changes


  const handleAddToCart = (product) => {
    setDisabledProducts(prev => [...prev, product.id]); 
    dispatch(addItemToCart(product));
    // document.getElementById('navbar').style.display = 'block';
  };

  return (
    <div className='p_details_container'>
      {product ? (
        <div className='p_details_div'>
            
            <div className='item_image_div'>
                <img src={product.image} alt="" />
            </div>
            
            <div className='item_details_div'>
              <div className='p_info_details_div'>
                <h2 className='product_title'>{product.title}</h2>
                <span className='product_price'>
                  <span><FaNairaSign /></span>
                  <span>{product.price}</span>
                </span>
                <p>{product.description}</p>
                <span>{product.id}</span>
              </div>

              <button
                  className={`add_to_cart_btn_d ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={disabledProducts.includes(product.id)}
              >
                  {disabledProducts.includes(product.id) ? <span>Added to Cart</span> : 'Add to Cart'}
              </button>

              <div className='b2p_btn_div'>
                  <Link to="/">
                      <button>Back to Products</button>
                  </Link>
              </div>
            </div>
        </div>
        
      ) : (
        <p><CardLoaderPage /></p> // Loading state
      )}
    </div>
  );
};

export default ProductDetails;