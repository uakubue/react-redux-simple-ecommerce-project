import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../CartSlice';
import { useState } from 'react';
import LoaderPage from '../loadPage/loaderPage/LoaderPage';
import { FaNairaSign } from "react-icons/fa6";
import React from 'react'
import "./ProductList.css"
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import CarouselComponent from '../carousel/CarouselComponent';
import Footer from '../footer/Footer';


const ProductList = () => {
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);

  const fetchProducts = async () => {

    const BASE_URL = "https://fakestoreapi.com/products"
    const response = await fetch(BASE_URL); // 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data: products = [], isFetched, isLoading, error } = useQuery({
    queryKey: ['products'], 
    queryFn:  fetchProducts,
  });

  const handleAddToCart = (product) => {
    setDisabledProducts(prev => [...prev, product.id]); 
    dispatch(addItemToCart(product));
    // document.getElementById('navbar').style.display = 'block';
  };

  if (isLoading) return <LoaderPage /> // Handle loading state
  if (products.length === 0) return <LoaderPage />
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <section>
      <div className='products_main_sec'>
        {/* <div className="product_list_title">
          <h2 className='text-center font-bold uppercase'>Our Products</h2>
        </div> */}

        <CarouselComponent />

        <div className='products_container'>
          <div className="product_list_items">
          {
                products.slice(0, 18).map(product => {
                    return(
                        <div key={product.id} className='products_card'>
                            <Link to={`/productLists/${product.id}`}>
                              <img src={product.image} className='product_image' alt={product.title} />
                            </Link>
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
      <Footer />
    </section>
  )
}

export default ProductList