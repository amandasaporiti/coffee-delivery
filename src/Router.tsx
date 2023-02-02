import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { Payment } from "./pages/Payment"
import { Delivery } from "./pages/Delivery"
import { DefaultLayout } from "./layouts/DefaultLayout"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}
