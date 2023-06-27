import { useContext } from 'react'
import { priceFormatter } from '../../../../../../utils/priceFormatter'
import { ConfirmOrderButton, PriceSummaryContainer } from './styles'
import { CartContext } from '../../../../../../contexts/CartContext'

interface PriceSummaryProps {
  isFormDisabled: boolean
}

export function PriceSummary({ isFormDisabled }: PriceSummaryProps) {
  const { coffeesInCart } = useContext(CartContext)

  const summary = coffeesInCart.reduce((acc, coffee) => {
    return (acc = acc + coffee.price * coffee.quantity)
  }, 0)

  const totalWithShipment = summary + 7.99

  return (
    <PriceSummaryContainer>
      <div>
        <span>Total de itens</span>
        <p>{priceFormatter.format(summary)}</p>
      </div>
      <div>
        <span>Entrega</span>
        <p>R$ 7,99</p>
      </div>
      <div>
        <h3>Total</h3>
        <strong>{priceFormatter.format(totalWithShipment)}</strong>
      </div>
      <ConfirmOrderButton type="submit" disabled={isFormDisabled}>
        Confirmar pedido
      </ConfirmOrderButton>
    </PriceSummaryContainer>
  )
}
