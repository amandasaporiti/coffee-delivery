import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { EmptyCart } from '../../components/EmptyCart'
import { CheckoutForm } from './components/CheckoutForm'

export function Checkout() {
  const { coffeesInCart } = useContext(CartContext)
  return (
    <div>{coffeesInCart.length > 0 ? <CheckoutForm /> : <EmptyCart />}</div>
  )
}
