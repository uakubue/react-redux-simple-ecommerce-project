import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/hompage/Home'
import ProductList from './components/productsPage/ProductList'
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productLists" element={<ProductList />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </>  
  )
}

export default App
