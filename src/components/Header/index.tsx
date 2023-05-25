import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import {
  ActionsContainer,
  CartButton,
  HeaderContainer,
  LocationContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartAmount } = useContext(CartContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <ActionsContainer>
        <LocationContainer>
          <MapPin size={24} color="#8047F8" weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <NavLink to="/checkout">
          <CartButton statusColor="yellow">
            {cartAmount >= 1 && <span>{cartAmount}</span>}
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
