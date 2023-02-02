import { useState, useContext } from "react"

import {
  CooffeMenuContainer,
  Menu,
  MenuOptions,
  CardIcon,
  MinusIcon,
  PlusIcon,
  AddQuantityItens,
} from "./styles"

import { CoffeeItensContext } from "../../contexts/CoffeeItensContext"

export const CoffeeMenu = () => {
  const { coffees } = useContext(CoffeeItensContext)

  const [quantity, setQuantity] = useState(1)

  const handleIncreaseCoffee = () => {
    setQuantity((state) => {
      return state + 1
    })
  }

  const handleDecreaseCoffee = () => {
    setQuantity((state) => {
      return state > 0 ? state - 1 : state
    })
  }

  return (
    <CooffeMenuContainer>
      <h2>Nossos cafés</h2>
      <Menu>
        {coffees.map((item) => (
          <MenuOptions key={item.id}>
            <img
              src={item.coffee_url}
              alt={item.name}
              height={120}
              width={120}
            />
            <div className="coffee-type">
              <span>{item.coffee_type}</span>
            </div>

            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <AddQuantityItens>
              <h3>
                R$ <strong>{item.price}</strong>
              </h3>
              <div className="add-to-cart">
                <button onClick={handleDecreaseCoffee}>
                  <MinusIcon size={16} />
                </button>
                <h4>{quantity}</h4>
                <button onClick={handleIncreaseCoffee}>
                  <PlusIcon size={16} />
                </button>
              </div>
              <div className="cart-icon">
                <CardIcon />
              </div>
            </AddQuantityItens>
          </MenuOptions>
        ))}
      </Menu>
    </CooffeMenuContainer>
  )
}
