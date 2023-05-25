import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const FormContainerAddress = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const ContainerInputError = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextError = styled.p`
  color: ${({ theme }) => theme.colors['base-error']};
  font-size: 0.875rem;
  line-height: 130%;
  font-family: 'Roboto';
  font-weight: 400;

  margin-bottom: 1rem;
  margin-top: 0.25rem;
`

export const ContainerComplement = styled.div`
  width: 100%;
  position: relative;

  .opcional {
    font-size: 0.75rem;
    margin-right: 0.75rem;
    font-style: italic;
    color: #8d8686;

    position: absolute;
    right: 10px;
    top: 16px;
  }
`

export const FormContainer = styled.form`
  margin-top: 2rem;

  .cep {
  }
`

interface InputProps {
  hasError?: string
}

export const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding: 0.75rem;
  border-radius: 4px;

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`

export const ContainerInputs = styled.div`
  display: flex;

  gap: 12px;

  .rua,
  .complemento,
  .bairro,
  .cidade {
    flex: 1;
  }

  .complemento {
    width: 100%;
  }
`

export const SectionTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  .title {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  .subtitle {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
