import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useStore } from "react-redux"

import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Log the entire state to understand its structure
    console.log(useSelector(state => state));

    // Access the cart items length correctly
    const cartItemsLength = useSelector(state => state.cart.cartItems.length || 0);
    
    console.log(cartItemsLength);

  return (
    <div>
        <nav>
            <div>
                <Link to="/">
                    <h2>Cholan</h2>
                </Link>
            </div>
            
            <Link to="/shoppingCart">
                <div className='cart_div'>
                    <div className='cart_icon'>
                        <ShoppingCartOutlinedIcon size="60"/>
                    </div>
                    <div className='cart_value_digit'>
                        {cartItemsLength}
                    </div>
                </div>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar