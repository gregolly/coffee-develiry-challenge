import { useContext, useState } from 'react'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  CardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
  Currency,
  ContainerValue,
  Value,
} from './styles'

import { ShoppingCart } from '@phosphor-icons/react'
import { AmountInput } from '../../../../components/AmountInput'
import { CartContext } from '../../../../contexts/CartContext'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CardCoffee({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  function handleIncrease() {
    setAmount((oldAmount) => oldAmount + 1)
  }

  function handleDecrease() {
    setAmount((oldAmount) => oldAmount - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      amount,
    }

    console.log(coffeeToAdd)

    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <ContainerValue>
          <Currency>R$</Currency>
          <Value>{formattedPrice}</Value>
        </ContainerValue>

        <AddCartWrapper>
          <AmountInput
            amount={amount}
            onDecreaseAmount={handleDecrease}
            onIncreseAmount={handleIncrease}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CardContainer>
  )
}
