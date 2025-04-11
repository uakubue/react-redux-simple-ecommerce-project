import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../CartSlice';
import { useState } from 'react';
import image1 from '../../assets/colour-flowers-white-pot-isolated-white.avif';
import image2 from '../../assets/potted-plant-against.jpg'
import image3 from '../../assets/lush-green-dracaena.avif'

import React from 'react'
import "./ProductList.css"



const ProductList = () => {

  const products = [
    { id: 1, name: 'Tulip plant', price: 60, image: image1 },
    { id: 2, name: 'Orchid plant', price: 75, image: image2},
    { id: 3, name: 'Lily plant', price: 30,  image: image3},
  ];


    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]);

    const handleAddToCart = (product) => {
      setDisabledProducts(prev => [...prev, product.id]); // disable first
      dispatch(addItemToCart(product));
    };
    



  return (
    <div className='products_container'>
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
      {
            products.map(product => {
                return(
                    <li key={product.id} className='product-list-item'>
                        <img src={product.image} size="40px" alt="product image" />
                        <span>{product.name} - ${product.price}</span>

                        <button
                            className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                            onClick={() => handleAddToCart(product)}
                            disabled={disabledProducts.includes(product.id)}
                            >
                            Add to Cart
                        </button>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default ProductList