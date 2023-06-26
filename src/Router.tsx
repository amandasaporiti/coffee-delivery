import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Delivery } from './pages/Delivery'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
