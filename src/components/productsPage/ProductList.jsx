import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../CartSlice';
import { useState } from 'react';
import image1 from '../../assets/Anaheim-pepper-plant.jpg';
import image2 from '../../assets/potted-plant-against.png'
import image3 from '../../assets/lush-green-dracaena.avif'
import image4 from '../../assets/Alocacia-tiny-plant.jpg'
import image5 from '../../assets/Alocasia-Frydeck-plant.jpg'
import image6 from '../../assets/Alocasia-Melo-plant.jpg'
import image7 from '../../assets/Alyssum-plant.jpg'
import image8 from '../../assets/Snake-plant.jpg'
import image9 from '../../assets/Anaheim-pepper-plant.jpg'

import React from 'react'
import "./ProductList.css"



const ProductList = () => {

  const products = [
    { id: 1, name: 'Tulip plant', price: 60, image: image1 },
    { id: 2, name: 'Orchid plant', price: 75, image: image2},
    { id: 3, name: 'Lily plant', price: 30,  image: image3},
    { id: 4, name: 'orange plant', price: 60, image: image4 },
    { id: 5, name: 'morringer plant', price: 75, image: image5},
    { id: 6, name: 'cicamon plant', price: 30,  image: image6},
    { id: 7, name: 'Mango plant', price: 60, image: image7 },
    { id: 8, name: 'Cherry plant', price: 75, image: image8},
    { id: 9, name: 'Guava plant', price: 30,  image: image9},
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
      <div className="product_list_title">
        <h2 >Our Products</h2>
      </div>

      <div className='products_container'>
        <div className="product_list_items">
        {
              products.map(product => {
                  return(
                      <div key={product.id} className='products_card'>
                          <img src={product.image} alt="product image" />
                          <div><span>{product.name} - ${product.price}</span></div>

                          <button
                              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
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
    </section>
  )
}

export default ProductList