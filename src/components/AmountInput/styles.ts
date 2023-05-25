import styled from 'styled-components'

export const AmountContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['base-button']};

  button {
    border: none;
    background: none;
  }

  .icon {
    color: ${({ theme }) => theme.colors.purple};
  }

  .amount {
    font-size: 1rem;
  }
`
