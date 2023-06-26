import { coffees } from '../../data/coffees'

import { HomeContainer, MenuContainer, Menu } from './styles'

import { Hero } from './components/Hero'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <MenuContainer>
        <h2>Nossos cafés</h2>
        <Menu>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </Menu>
      </MenuContainer>
    </HomeContainer>
  )
}
