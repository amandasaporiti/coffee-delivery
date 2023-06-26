import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react'
import {
  BannerContainer,
  BoxContainer,
  DescriptionSection,
  HeroContainer,
  IconContainer,
} from './styles'

import coffeeHeroImg from '../../../../assets/coffee-hero.svg'

export function Hero() {
  return (
    <HeroContainer>
      <DescriptionSection>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <BannerContainer>
          <BoxContainer>
            <div>
              <IconContainer boxColors="orange">
                <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
              </IconContainer>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <IconContainer boxColors="yellow">
                <Timer size={16} color="#FAFAFA" weight="fill" />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </div>
          </BoxContainer>
          <BoxContainer>
            <div>
              <IconContainer boxColors="gray">
                <Cube size={16} color="#FAFAFA" weight="fill" />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <IconContainer boxColors="purple">
                <Coffee size={16} color="#FAFAFA" weight="fill" />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </div>
          </BoxContainer>
        </BannerContainer>
      </DescriptionSection>

      <img src={coffeeHeroImg} alt="" />
    </HeroContainer>
  )
}
