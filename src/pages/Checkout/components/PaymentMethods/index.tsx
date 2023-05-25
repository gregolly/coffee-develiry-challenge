import { SectionTitle } from '../AddressDelivery/styles'
import { ButtonMethodsContainer, PaymentMethodsContainer } from './styles'

import currency from '../../../../assets/currency.svg'
import { Button } from '../../../../components/Button'
import { Bank, CreditCard } from '@phosphor-icons/react'
import { useState } from 'react'

export function PaymentMethods() {
  const [selectedButton, setSelectedButton] = useState('credit')

  function handleClickButton(buttonLabel: string) {
    setSelectedButton(buttonLabel)
  }

  return (
    <PaymentMethodsContainer>
      <SectionTitle>
        <img src={currency} alt="" />
        <div>
          <div className="title">Endereço de Entrega</div>
          <div className="subtitle">
            Informe o endereço onde deseja receber seu pedido
          </div>
        </div>
      </SectionTitle>

      <ButtonMethodsContainer>
        <Button
          icon={<CreditCard size={16} />}
          label="cartão de crédito"
          selected={selectedButton === 'credit'}
          onClick={() => handleClickButton('credit')}
        />
        <Button
          icon={<Bank size={16} />}
          label="cartão de débito"
          selected={selectedButton === 'debit'}
          onClick={() => handleClickButton('debit')}
        />
        <Button
          icon={<CreditCard size={16} />}
          label="dinheiro"
          selected={selectedButton === 'money'}
          onClick={() => handleClickButton('money')}
        />
      </ButtonMethodsContainer>
    </PaymentMethodsContainer>
  )
}
