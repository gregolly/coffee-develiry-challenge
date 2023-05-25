import { useFormContext } from 'react-hook-form'
import pin from '../../../../assets/pin.svg'
import {
  AddressContainer,
  ContainerComplement,
  ContainerInputError,
  ContainerInputs,
  FormContainer,
  FormContainerAddress,
  Input,
  SectionTitle,
  TextError,
} from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressDelivery() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  console.log(errors)
  return (
    <AddressContainer>
      <h2>Complete seu pedido</h2>
      <FormContainerAddress>
        <SectionTitle>
          <img src={pin} alt="" />
          <div>
            <div className="title">Endereço de Entrega</div>
            <div className="subtitle">
              Informe o endereço onde deseja receber seu pedido
            </div>
          </div>
        </SectionTitle>
        <FormContainer>
          <ContainerInputError>
            <Input
              hasError={errors.cep?.message}
              className="number"
              type="text"
              placeholder="CEP"
              {...register('cep')}
            />
            <TextError>{errors && errors.cep?.message}</TextError>
          </ContainerInputError>
          <ContainerInputs>
            <ContainerInputError>
              <Input
                hasError={errors.street?.message}
                className="rua"
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              <TextError>{errors && errors.street?.message}</TextError>
            </ContainerInputError>
          </ContainerInputs>
          <ContainerInputs>
            <ContainerInputError>
              <Input
                hasError={errors.number?.message}
                className="numero"
                type="text"
                placeholder="Número"
                {...register('number')}
              />
              <TextError>{errors && errors.number?.message}</TextError>
            </ContainerInputError>
            <ContainerComplement>
              <Input
                className="complemento"
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <p className="opcional">opcional</p>
            </ContainerComplement>
          </ContainerInputs>
          <ContainerInputs>
            <ContainerInputError>
              <Input
                hasError={errors.district?.message}
                className="bairro"
                type="text"
                placeholder="Bairro"
                {...register('district')}
              />
              <TextError>{errors && errors.district?.message}</TextError>
            </ContainerInputError>
            <ContainerInputError>
              <Input
                hasError={errors.city?.message}
                className="cidade"
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <TextError>{errors && errors.city?.message}</TextError>
            </ContainerInputError>
            <ContainerInputError>
              <Input
                hasError={errors.uf?.message}
                className="uf"
                type="text"
                placeholder="UF"
                {...register('uf')}
              />
              <TextError>{errors && errors.uf?.message}</TextError>
            </ContainerInputError>
          </ContainerInputs>
        </FormContainer>
      </FormContainerAddress>
    </AddressContainer>
  )
}
