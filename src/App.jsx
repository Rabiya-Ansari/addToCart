import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './layout/AppLayout'
import ProductsCard from './pages/ProductsCard'
import CartProvider from './context/CartApi'
import Cart from './pages/Cart'

const CartApi = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsCard />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}
const App = () => {
  return (
    <CartProvider>
      <CartApi />
    </CartProvider>
  )
}

export default App