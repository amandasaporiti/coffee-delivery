import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </CartContextProvider>
  )
}
