import { CurrencyDollar, Timer, MapPin } from "phosphor-react"

import deliveryImg from "../../assets/delivery.svg"

import {
  DeliveryContainer,
  DeliveryInformation,
  DeliveryContent,
  DeliveryContainerFlex,
} from "./styles"

export const Delivery = () => {
  return (
    <DeliveryContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <DeliveryContainerFlex>
        <DeliveryInformation>
          <DeliveryContent>
            <div className="icon">
              <MapPin size={20} />
            </div>
            <div className="content">
              <span>
                Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </DeliveryContent>
          <DeliveryContent>
            <div className="icon">
              <Timer size={20} />
            </div>
            <div className="content">
              <span>Previsão de entrega</span>
              <strong> 20 min - 30 min</strong>
            </div>
          </DeliveryContent>

          <DeliveryContent>
            <div className="icon">
              <CurrencyDollar size={20} />
            </div>
            <div className="content">
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </DeliveryContent>
        </DeliveryInformation>
        <img src={deliveryImg} alt="" />
      </DeliveryContainerFlex>
    </DeliveryContainer>
  )
}
