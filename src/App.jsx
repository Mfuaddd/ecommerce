import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import CartPage from './pages/CartPage'

function App() {

  return (
  <Routes>
    <Route element={<MainLayout />}>Wishlist
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  </Routes>
  )
}

export default App
