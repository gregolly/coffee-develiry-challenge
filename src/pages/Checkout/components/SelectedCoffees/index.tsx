import { CoffeeCart } from './CoffeeCart'
import { DetailsCoffees, SelectedCoffeesContainer } from './styles'

import { ConfirmationSection } from './ConfirmationSection'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function SelectedCoffees() {
  const { cartItems } = useContext(CartContext)

  console.log(cartItems)

  return (
    <SelectedCoffeesContainer>
      <h2>Cafés selecionados</h2>

      <DetailsCoffees>
        {cartItems.map((coffee) => (
          <CoffeeCart key={coffee.id} coffee={coffee} />
        ))}

        <ConfirmationSection />
      </DetailsCoffees>
    </SelectedCoffeesContainer>
  )
}
