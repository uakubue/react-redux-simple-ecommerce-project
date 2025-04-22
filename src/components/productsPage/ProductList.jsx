import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../CartSlice';
import { useState } from 'react';
import LoaderPage from '../loadPage/LoaderPage';
import { FaNairaSign } from "react-icons/fa6";
import React from 'react'
import "./ProductList.css"
import { useQuery } from '@tanstack/react-query';




const ProductList = () => {
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);

  // Define the fetch function
  const fetchProducts = async () => {

    const BASE_URL = "https://api.escuelajs.co/api/v1/products?limit=20"
    const response = await fetch(BASE_URL); // Replace with a valid URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Return the parsed JSON
  };

  // Use useQuery to fetch products
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'], 
    queryFn:  fetchProducts,
  });

  const handleAddToCart = (product) => {
    setDisabledProducts(prev => [...prev, product.id]); // disable first
    dispatch(addItemToCart(product));
    // document.getElementById('navbar').style.display = 'block';
  };

  if (isLoading) return <LoaderPage /> // Handle loading state
  if (error) return <div>Error fetching products: {error.message}</div>; // Handle error state

  return (
    <section>
      <div className='products_main_sec'>
        <div className="product_list_title">
          <h2 className='text-center font-bold uppercase'>Our Products</h2>
        </div>

        <div className='products_container'>
          <div className="product_list_items">
          {
                products.map(product => {
                    return(
                        <div key={product.id} className='products_card'>
                            <img src={product.images} className='product_image' alt={product.title} />
                            <div className='name_price_div'>
                              <div className='name_div'>
                                <span>{product.title}</span> 
                              </div>
                              <div className='price_div'>
                                <span><FaNairaSign /></span>
                                <span>{product.price.toFixed(2)}</span>
                              </div>                           
                            </div>

                            <button
                                className={`add_to_cart_btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                                onClick={() => handleAddToCart(product)}
                                disabled={disabledProducts.includes(product.id)}
                            >
                                {disabledProducts.includes(product.id) ? <span>Added to Cart</span> : 'Add to Cart'}
                            </button>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductList