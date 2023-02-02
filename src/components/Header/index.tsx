import { Container, MenuHeader, LocationIcon, ShoppingCartIcon } from "./styles"

import coffeeDeliveryLogo from "../../assets/logo.svg"

import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CoffeeItensContext } from "../../contexts/CoffeeItensContext"

export const Header = () => {
  const { itensQuantityInCar } = useContext(CoffeeItensContext)

  return (
    <Container>
      <NavLink to="/" title="Página inicial">
        <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />
      </NavLink>

      <MenuHeader>
        <p>
          <LocationIcon />
          Curitiba, PR
        </p>
        <NavLink to="/payment" title="Pagamentos">
          <div>
            <span>{itensQuantityInCar}</span>
            <ShoppingCartIcon />
          </div>
        </NavLink>
      </MenuHeader>
    </Container>
  )
}
