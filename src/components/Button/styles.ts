import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 1rem;
  gap: 12px;
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  border: 2px solid transparent;
  justify-content: center;

  font-size: 0.75rem;

  color: ${({ theme }) => theme.colors['base-text']};

  width: 11.25rem;

  svg {
    fill: ${({ theme }) => theme.colors.purple};
  }
`
