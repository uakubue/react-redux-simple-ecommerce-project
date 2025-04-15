import React from 'react'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useStore } from "react-redux"
import './Navbar.css'
import { Link } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    // Log the entire state to understand its structure
    console.log(useSelector(state => state));

    // Access the cart items length correctly
    const cartItemsLength = useSelector(state => state.cart.cartItems.length || 0);
    
    console.log(cartItemsLength);

  return (
        <div className='nav_container'>
            <nav className='static'>
                <div className='logo_div'>
                    <Link  to="/">
                        <h2 className='logo_div text-2xl sm:text-lg xs:text-sm md:text-4xl lg:text-4xl'>Cholan Agro</h2>
                    </Link>
                </div>
                
                <Link to="/shoppingCart">
                    <div className='cart_div'>
                        <div className='cart_icon'>
                            <FaShoppingCart size="30" className='nav_cart_icon'/>
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