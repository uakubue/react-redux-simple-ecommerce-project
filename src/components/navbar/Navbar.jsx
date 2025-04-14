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
        <nav>
            <div className='logo_div'>
                <Link  to="/">
                    <h2 className='logo_div'>Cholan Agro</h2>
                </Link>
            </div>
            
            <Link to="/shoppingCart">
                <div className='cart_div'>
                    <div className='cart_icon'>
                        <ShoppingCartOutlinedIcon className='nav_cart' />
                    </div>
                    <div className='cart_value_digit'>
                        {cartItemsLength}
                    </div>
                </div>
            </Link>
        </nav>
  )
}

export default Navbar