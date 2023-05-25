import { Trash } from '@phosphor-icons/react'
import { AmountInput } from '../../../../../components/AmountInput'
import { ActionsContainer, CoffeeCartContainer, RemoveButton } from './styles'
import { formatMoney } from '../../../../../utils/formatMoney'
import { useContext } from 'react'
import { CartContext, CartItem } from '../../../../../contexts/CartContext'

interface CoffeeCartProps {
  coffee: CartItem
}

export function CoffeeCart({ coffee }: CoffeeCartProps) {
  const { changeCartItemAmount, removeCartItem } = useContext(CartContext)

  const coffeeTotal = coffee.price * coffee.amount

  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemAmount(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemAmount(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <h4>{coffee.name}</h4>

          <ActionsContainer>
            <AmountInput
              amount={coffee.amount}
              onIncreseAmount={handleIncrease}
              onDecreaseAmount={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartContainer>
  )
}
