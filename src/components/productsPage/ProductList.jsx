import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../CartSlice';
import { useState } from 'react';
import image1 from '../../assets/Anaheim-pepper-plant.jpg';
import image2 from '../../assets/Alocasia-Melo-plant.jpg'
import image3 from '../../assets/Snake-plant.jpg'
import image4 from '../../assets/Alocacia-tiny-plant.jpg'
import image5 from '../../assets/Alocasia-Frydeck-plant.jpg'
import image6 from '../../assets/Alocasia-Melo-plant.jpg'
import image7 from '../../assets/Alyssum-plant.jpg'
import image8 from '../../assets/Snake-plant.jpg'
import image9 from '../../assets/Anaheim-pepper-plant.jpg'

import { FaNairaSign } from "react-icons/fa6";


import React from 'react'
import "./ProductList.css"



const ProductList = () => {

  const products = [
    { id: 1, name: 'Tulip plant', price: 1579.99999, image: image1 },
    { id: 2, name: 'Orchid plant', price: 750.99, image: image2},
    { id: 3, name: 'Lily plant', price: 3400,  image: image3},
    { id: 4, name: 'orange plant', price: 6200, image: image4 },
    { id: 5, name: 'morringer plant', price: 1750, image: image5},
    { id: 6, name: 'cicamon plant', price: 3550,  image: image6},
    { id: 7, name: 'Mango plant', price: 6500, image: image7 },
    { id: 8, name: 'Cherry plant', price: 4000, image: image8},
    { id: 9, name: 'Guava plant', price: 900,  image: image9},
  ];


    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]);

    const handleAddToCart = (product) => {
      setDisabledProducts(prev => [...prev, product.id]); // disable first
      dispatch(addItemToCart(product));

      document.getElementById('navbar').style.display = 'block';
    };

    
    



  return (
    <section>
      <div className='products_main_sec'>
        <div className="product_list_title">
          <h2 className='text-center font-bold uppercase'>Our Greenery Products</h2>
        </div>

        <div className='products_container'>
          <div className="product_list_items">
          {
                products.map(product => {
                    return(
                        <div key={product.id} className='products_card'>
                            <img src={product.image} className='product_image' alt="product image" />
                            <div className='name_price_div'>
                              <div className='name_div'>
                                <span>{product.name}</span> 
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
                                Add to Cart
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