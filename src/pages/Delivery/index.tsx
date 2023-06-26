import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BoxDelivery,
  Content,
  DeliveryContainer,
  DeliveryDescription,
  IconContainer,
  DeliveryImage,
  Container,
} from './styles'

import deliveryMotoboyImg from '../../assets/motoboy.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Delivery() {
  const { checkoutData } = useContext(CartContext)

  return (
    <DeliveryContainer>
      <Content>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <BoxDelivery>
          <Container>
            <IconContainer boxColor="purple">
              <MapPin size={16} weight="fill" color="#FAFAFA" />
            </IconContainer>
            <DeliveryDescription>
              <span>
                Entrega em{' '}
                <strong>
                  {checkoutData.street}, {checkoutData.numberAddress}
                </strong>
              </span>
              <span>
                {checkoutData.neighborhood} - {checkoutData.city},{' '}
                {checkoutData.uf}
              </span>
            </DeliveryDescription>
          </Container>
          <Container>
            <IconContainer boxColor="yellow">
              <Timer size={16} weight="fill" color="#FAFAFA" />
            </IconContainer>
            <DeliveryDescription>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </DeliveryDescription>
          </Container>
          <Container>
            <IconContainer boxColor="orange">
              <CurrencyDollar size={16} weight="fill" color="#FAFAFA" />
            </IconContainer>
            <DeliveryDescription>
              <span>Pagamento na entrega</span>
              {checkoutData.paymentOption === 'credit' && (
                <strong>Cartão de Crédito</strong>
              )}
              {checkoutData.paymentOption === 'debit' && (
                <strong>Cartão de Débito</strong>
              )}
              {checkoutData.paymentOption === 'money' && (
                <strong>Dinheiro</strong>
              )}
            </DeliveryDescription>
          </Container>
        </BoxDelivery>
      </Content>

      <DeliveryImage>
        <img src={deliveryMotoboyImg} alt="" />
      </DeliveryImage>
    </DeliveryContainer>
  )
}
