import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react"

import { Input } from "../Input"

import {
  OrderInformationContainer,
  CompleteOrder,
  SelectedCooffes,
  DeliveryAdress,
  DeliveryAdressHeader,
  DeliveryAdressContent,
  DeliveryPaymentContent,
  SelectedCooffeContent,
  CooffesOrder,
  TotalItens,
} from "./styles"

import tradicional from "../../assets/tradicional.svg"

import latte from "../../assets/latte.svg"

export const OrderInformation = () => {
  return (
    <OrderInformationContainer>
      <CompleteOrder>
        <h1>Complete seu pedido</h1>
        <DeliveryAdress>
          <DeliveryAdressHeader>
            <MapPinLine size={24} color="#C47F17" />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </DeliveryAdressHeader>
          <DeliveryAdressContent>
            <Input type="text" placeholder="CEP" className="cep" />
            <Input type="text" placeholder="Rua" className="rua" />
            <div className="number-complement">
              <Input type="text" placeholder="Número" className="numero" />
              <Input
                type="text"
                placeholder="Complemento"
                className="complemento"
              />
            </div>
            <div className="number-complement">
              <Input type="text" placeholder="Bairro" className="bairro" />
              <Input type="text" placeholder="Cidade" className="cidade" />
              <Input type="text" placeholder="UF" className="uf" />
            </div>
          </DeliveryAdressContent>
        </DeliveryAdress>

        <DeliveryAdress>
          <DeliveryAdressHeader>
            <CurrencyDollar size={24} color="#8047F8" />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </DeliveryAdressHeader>
          <DeliveryPaymentContent>
            <div>
              <CreditCard size={22} color="#8047F8" />
              Cartão de crédito
            </div>
            <div>
              <Bank size={22} color="#8047F8" />
              Cartão de débito
            </div>
            <div>
              <Money size={22} color="#8047F8" />
              Dinheiro
            </div>
          </DeliveryPaymentContent>
        </DeliveryAdress>
      </CompleteOrder>
      <SelectedCooffes>
        <h2>Cafés selecionados</h2>
        <SelectedCooffeContent>
          <CooffesOrder>
            <img src={tradicional} alt="" />
            <div className="column-container">
              <h2>Expresso Tradicional</h2>
              <div className="buttons-action">
                <button className="add-item" type="button">
                  <Plus size={14} color="#8047F8" />
                  1
                  <Minus size={14} color="#8047F8" />
                </button>
                <button className="remove-item" type="button">
                  <Trash size={14} color="#8047F8" />
                  Remover
                </button>
              </div>
            </div>
            <p>R$ 9,90</p>
          </CooffesOrder>
          <CooffesOrder>
            <img src={latte} alt="" />
            <div className="column-container">
              <h2>Latte</h2>
              <div className="buttons-action">
                <button className="add-item" type="button">
                  <Plus size={14} color="#8047F8" />
                  1
                  <Minus size={14} color="#8047F8" />
                </button>
                <button className="remove-item" type="button">
                  <Trash size={14} color="#8047F8" />
                  Remover
                </button>
              </div>
            </div>
            <p>R$ 19,80</p>
          </CooffesOrder>
          <TotalItens>
            <div>
              <p>Total de Itens</p>
              <p>R$ 29,76</p>
            </div>

            <div>
              <p>Entrega</p>
              <p>R$ 9,76</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,30</strong>
            </div>
            <button type="submit">Confirmar pedido</button>
          </TotalItens>
        </SelectedCooffeContent>
      </SelectedCooffes>
    </OrderInformationContainer>
  )
}
