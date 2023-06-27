import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { CartContextProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
        <ToastContainer />
      </BrowserRouter>
    </CartContextProvider>
  )
}
