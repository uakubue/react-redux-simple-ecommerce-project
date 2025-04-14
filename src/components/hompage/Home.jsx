import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className='main_container'>
        <div className='home_container'>
            <div className='intro_container'>
                <div className='inner_intro_cont'>
                    <h1>Welcome to Cholan Nursery</h1>
                    <p>Where GREEN meet SERENITY</p>
                </div>

                <Link to="/productLists">
                    <button>Checkout Our Greeneries</button>
                </Link>
            </div>

            <div className='description_container'>
                <h3>Welcome to Cholan Nursery, where green meet serenity</h3>
                <p>At Cholan Nursery, we're passionate about bringing nature closer to you. 
                    Our mission is to provide a wide-range of health-quality plants
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home