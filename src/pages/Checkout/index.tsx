import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { AddressDelivery } from './components/AddressDelivery'
import { PaymentMethods } from './components/PaymentMethods'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderData = OrderData

export function Checkout() {
  const navigate = useNavigate()
  const confirmOderForm = useForm<ConfirmOrderData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOderForm

  function handleConfirmOrder(data: ConfirmOrderData) {
    navigate('/success', {
      state: data,
    })
  }

  return (
    <FormProvider {...confirmOderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <div>
          <AddressDelivery />
          <PaymentMethods />
        </div>
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
