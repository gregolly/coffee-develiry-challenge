import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { FeaturesContainer, HeadlineContainer, HeroContainer } from './styles'

import hero from '../../../../assets/hero.png'
import { InformationItems } from '../../../../components/InformationItems'

export function Hero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeadlineContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <FeaturesContainer>
            <InformationItems
              iconBg={colors['yellow-dark']}
              icon={<ShoppingCart size={16} weight="fill" />}
              text="Compra simples e segura"
            />
            <InformationItems
              iconBg={colors['base-text']}
              icon={<Package size={16} weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InformationItems
              iconBg={colors.yellow}
              icon={<Timer size={16} weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InformationItems
              iconBg={colors.purple}
              icon={<Coffee size={16} weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </FeaturesContainer>
        </div>

        <img src={hero} alt="" />
      </HeadlineContainer>
    </HeroContainer>
  )
}
