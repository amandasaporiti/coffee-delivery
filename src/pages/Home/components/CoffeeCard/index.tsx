import { useState, useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeType,
  NavigateToCartButton,
  Price,
} from './styles'

import { priceFormatter } from '../../../../utils/priceFormatter'
import { CartContext } from '../../../../contexts/CartContext'
import { InputQuantity } from '../../../../components/InputQuantity'

export interface Coffee {
  id: number
  name: string
  description: string
  type: string[]
  photoUrl: string
  price: number
}

export interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((quantity) => quantity - 1)
  }

  function handleAddCoffeeToCart() {
    const coffeeAdded = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeAdded)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.photoUrl} alt={coffee.name} />

      <CoffeeType>
        {coffee.type.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </CoffeeType>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <footer>
        <Price>
          <strong>{priceFormatter.format(coffee.price)}</strong>
        </Price>
        <div>
          <InputQuantity
            quantity={quantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
          <NavigateToCartButton type="button" onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" fill="#FAFAFA" />
          </NavigateToCartButton>
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
