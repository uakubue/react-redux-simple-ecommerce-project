import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/hompage/Home'
import ProductList from './components/productsPage/ProductList'
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productLists" element={<ProductList />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </section>  
  )
}

export default App
