import { CardCoffee } from '../CardCoffee'
import { CoffeeList, CoffeesContainer } from './styles'

import { coffees } from '../../../../api/coffees'

export function Coffees() {
  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CardCoffee key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeesContainer>
  )
}
