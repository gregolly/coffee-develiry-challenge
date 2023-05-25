import styled from 'styled-components'

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ConfirmationButton = styled.button.attrs({ type: 'submit' })`
  padding: 0.75rem 2.8rem;
  color: #ffffff;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.yellow};
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  line-height: 1.3rem;
  margin-top: 0.7rem;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const TextPattern = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.875rem;
  line-height: 130%;
  font-family: 'Roboto';
  font-weight: 400;
`

export const TotalItems = styled.div(TextPattern)

export const DeliveryPrice = styled.div(TextPattern)

export const TotalPriceItems = styled.div`
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: 1.25rem;
  line-height: 130%;
  font-family: 'Roboto';
  font-weight: 700;
`
