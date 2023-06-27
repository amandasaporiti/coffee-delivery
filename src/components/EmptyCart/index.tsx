import { Link } from 'react-router-dom'
import { EmptyCartContainer } from './styles'

import emptyCartImg from '../../assets/empty-cart.svg'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <div>
        <h2>Ihh! Não tem nada aqui!</h2>
        <span>
          Volte ao <Link to="/">cardápio</Link> para comprar
        </span>
      </div>
      <img src={emptyCartImg} alt="Carrinho vazio" />
    </EmptyCartContainer>
  )
}
