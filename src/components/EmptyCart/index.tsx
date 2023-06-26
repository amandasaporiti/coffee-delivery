import { Link } from 'react-router-dom'

export function EmptyCart() {
  return (
    <div>
      <h1>
        Carrinho vazio{' '}
        <Link to="/">Volte ao cardápio e selecione alguma opção</Link>
      </h1>
    </div>
  )
}
