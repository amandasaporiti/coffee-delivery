import { useContext } from 'react'
import { Link } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, Quantity } from './styles'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { coffeesInCart } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </Link>

      <nav>
        <div>
          <MapPin size={22} weight="fill" fill="#8047F8" />
          <span>Curitiba, PR</span>
        </div>
        <Link to="/checkout">
          {coffeesInCart.length > 0 && (
            <Quantity>{coffeesInCart.length}</Quantity>
          )}

          <ShoppingCart size={22} weight="fill" fill="#C47F17" />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
