import {
  ContainerMainContent,
  ContainerOrderInfo,
  ContainerSuccess,
} from './styles'

import ilustration from '../../assets/ilustration.png'
import { InformationItems } from '../../components/InformationItems'
import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Success() {
  const { colors } = useTheme()
  return (
    <ContainerSuccess>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <ContainerMainContent>
        <ContainerOrderInfo>
          <ul>
            <InformationItems
              text="Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS"
              icon={<MapPin weight="fill" />}
              iconBg={colors.purple}
            />
            <InformationItems
              text="Previsão de entrega 20 min - 30 min"
              icon={<Clock weight="fill" />}
              iconBg={colors.yellow}
            />
            <InformationItems
              text="Pagamento na entrega Cartão de Crédito"
              icon={<CurrencyDollar weight="fill" />}
              iconBg={colors['yellow-dark']}
            />
          </ul>
        </ContainerOrderInfo>
        <img src={ilustration} alt="" />
      </ContainerMainContent>
    </ContainerSuccess>
  )
}
