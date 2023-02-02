import { HomeContainer, HomeContent, About, Purchase } from "./styles"

import coffeDelevery from "../../assets/coffee.svg"
import cart from "../../assets/cart.svg"
import time from "../../assets/timer.svg"
import packageDelevery from "../../assets/package.svg"
import cup from "../../assets/cup.svg"

import { CoffeeMenu } from "../../components/CoffeeMenu"

export const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <About>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Purchase>
            <div>
              <img src={cart} alt="" />
              <p>Compra simples e segura</p>
            </div>

            <div>
              <img src={time} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <img src={cup} alt="" />
              <p>Entrega rápida e rastreada</p>
            </div>

            <div>
              <img src={packageDelevery} alt="" />
              <p>O café chega fresquinho até você</p>
            </div>
          </Purchase>
        </About>
        <img src={coffeDelevery} alt="Coffee Delivery" />
      </HomeContent>
      <CoffeeMenu />
    </HomeContainer>
  )
}
