import { useContext } from 'react'
import {
  ConfirmationButton,
  ConfirmationSectionContainer,
  DeliveryPrice,
  TotalItems,
  TotalPriceItems,
} from './styles'
import { CartContext } from '../../../../../contexts/CartContext'
import { formatMoney } from '../../../../../utils/formatMoney'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartAmount } = useContext(CartContext)
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeveliryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <TotalItems>
        <div>Total de itens</div>
        <div>R$ {formattedItemsTotal}</div>
      </TotalItems>
      <DeliveryPrice>
        <div>Entrega</div>
        <div>R$ {formattedDeveliryPrice}</div>
      </DeliveryPrice>
      <TotalPriceItems>
        <div>Total</div>
        <div>R$ {formattedCartTotal}</div>
      </TotalPriceItems>

      <ConfirmationButton disabled={cartAmount <= 0}>
        Confirmar Pedido
      </ConfirmationButton>
    </ConfirmationSectionContainer>
  )
}
