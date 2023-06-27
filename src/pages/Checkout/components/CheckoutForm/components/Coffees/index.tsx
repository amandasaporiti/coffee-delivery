/* eslint-disable array-callback-return */
import { useContext } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'
import { InputQuantity } from '../../../../../../components/InputQuantity'
import { priceFormatter } from '../../../../../../utils/priceFormatter'
import {
  CartSummary,
  CoffeeSummary,
  CoffeesContainer,
  RemoveItemButton,
} from './styles'
import { Trash } from 'phosphor-react'

export function Coffees() {
  const { coffeesInCart, removeCoffee, changeQuantityValueInCart } =
    useContext(CartContext)

  function handleIncreaseQuantity(id: number) {
    changeQuantityValueInCart(id, 'increase')
  }

  function handleDecreaseQuantity(id: number) {
    changeQuantityValueInCart(id, 'decrease')
  }

  return (
    <CoffeesContainer>
      {coffeesInCart.map((coffee) => (
        <CartSummary key={coffee.id}>
          <img src={coffee.photoUrl} alt={coffee.name} />
          <CoffeeSummary>
            <p>{coffee.name}</p>
            <div>
              <InputQuantity
                quantity={coffee.quantity}
                onDecrease={() => handleDecreaseQuantity(coffee.id)}
                onIncrease={() => handleIncreaseQuantity(coffee.id)}
              />
              <RemoveItemButton onClick={() => removeCoffee(coffee.id)}>
                <Trash size={16} color="#8047F8" />
                <span>Remover</span>
              </RemoveItemButton>
            </div>
          </CoffeeSummary>
          <strong>{priceFormatter.format(coffee.price)}</strong>
        </CartSummary>
      ))}
    </CoffeesContainer>
  )
}
