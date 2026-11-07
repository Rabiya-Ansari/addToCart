import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './layout/AppLayout'
// import ProductsCard from './pages/ProductsCard'
import CartProvider from './context/CartApi'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast'
const ProductsCard = lazy(() => import('./pages/ProductsCard'))
const CartApi = () => {

  return (

    <>
      <Toaster
        position="top-right"
      />
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-xl"></span></div>}>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsCard />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
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