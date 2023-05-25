import { Minus, Plus } from '@phosphor-icons/react'
import { AmountContainer } from './styles'

interface AmountInputProps {
  amount: number
  onIncreseAmount: () => void
  onDecreaseAmount: () => void
}

export function AmountInput({
  amount,
  onIncreseAmount,
  onDecreaseAmount,
}: AmountInputProps) {
  return (
    <AmountContainer>
      <button
        disabled={amount <= 1}
        className="icon"
        onClick={onDecreaseAmount}
      >
        <Minus size={14} />
      </button>
      <span className="amount">{amount}</span>
      <button className="icon" onClick={onIncreseAmount}>
        <Plus size={14} />
      </button>
    </AmountContainer>
  )
}
