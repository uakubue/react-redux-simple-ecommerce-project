import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from '../../CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css'; // Import CSS file for component-specific styles
import { Link } from 'react-router-dom';

import { FaNairaSign } from "react-icons/fa6";


const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <section className='cart_container'>
      <div className="shopping_cart">
        <div className='cart_cont'>
          <div className="cart_items">
            {
              cartItems.length !== 0 ? (
                cartItems.map(item => (
                  <div key={item.id} className="cart_inner_item">
                    <div className='cart_item_div'>
                      <div className='img_div'>
                        <img src={item.image} alt={item.title}/>
                      </div>
                      
                      <div className='desc_div'>
                        <p className='item_title'>{item.title}</p>
                        <span className='amount_list'><FaNairaSign /><span>{item.price.toFixed(2)}</span></span>
    
                        <div className="quantity-controls">
                          <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                          <span> {item.quantity}</span>
                          <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                        </div>
                        <button className="remove-item-btn " onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='empty_cart_div'>
                  <p>Your Shopping cart is empty</p>
                </div>
              )
            }
          </div>
        </div>
        

        <div className='cart_btn_div'>
          <button className="clear-cart-btn sticky" onClick={handleClearCart}>Clear Cart</button>

          <Link to="/productLists">
            <div>
              <button className='ctn_shoppin_btn'>Continue Shopping</button>
            </div>
          </Link>
        </div>

      </div>
      
      <div className='amount_div'>
        {totalAmount ? 
          <div className='total_amount'>The total amount is  
            <span className='amount_s'><FaNairaSign /><span>{totalAmount.toFixed(2)}</span></span>
          </div> : 
          <div>The total amount is <FaNairaSign />0</div>
        }
        <div>
          <button className='checkout_btn'>Checkout {totalAmount.toFixed(2)}</button>
        </div>
      </div>

    </section>
  );
};

export default ShoppingCart;