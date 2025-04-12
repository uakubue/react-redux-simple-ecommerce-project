import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from '../../CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css'; // Import CSS file for component-specific styles
import { Link } from 'react-router-dom';

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
    <div className='cart_container'>
      <div className="shopping_cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <div className='cart_cont'>
          <div className="cart_items">
            {cartItems.map(item => (
              <div key={item.id} className="cart_inner_item">
                <div className='cart_item_div'>
                  <div className='img_div'>
                    <img src={item.image} alt="" />
                  </div>
                  
                  <div className='desc_div'>
                    <p>{item.name}</p>
                    <span>{item.name} - ${item.price}</span>

                    <div className="quantity-controls">
                      <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      <span> {item.quantity}</span>
                      <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    </div>
                    <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>

        <Link to="/productLists">
          <div>
            <button>Continue Shopping</button>
          </div>
        </Link>
      </div>
      <div>{totalAmount ? <div className='total_amount'>The total amount is  <span className='amount_s'>${totalAmount}</span></div> : <div>The total amount is $0</div>}</div>
    </div>
  );
};

export default ShoppingCart;