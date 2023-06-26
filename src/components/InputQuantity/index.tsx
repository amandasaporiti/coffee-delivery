import { Plus, Minus } from 'phosphor-react'
import { InputQuantityContainer } from './styles'

interface InputQuantityProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function InputQuantity({
  quantity,
  onIncrease,
  onDecrease,
}: InputQuantityProps) {
  return (
    <InputQuantityContainer>
      <button type="button" onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={17} weight="fill" />
      </button>

      <input type="number" min={1} readOnly value={quantity} />

      <button type="button" onClick={onIncrease}>
        <Plus size={17} weight="fill" />
      </button>
    </InputQuantityContainer>
  )
}
