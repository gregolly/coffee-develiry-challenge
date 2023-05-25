import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const DetailsCoffees = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`
