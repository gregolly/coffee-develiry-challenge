import { Coffees } from './components/Coffees'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Coffees />
    </HomeContainer>
  )
}
