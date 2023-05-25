import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  width: 80rem;
  margin: 0 auto;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
`
const STATUS_COLORS = {
  yellow: 'yellow-light',
  purple: 'purple-dark',
} as const

interface CartButtonProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const CartButton = styled.button<CartButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border: 0;
  border-radius: 6px;
  position: relative;
  cursor: pointer;

  background-color: ${(props) =>
    props.theme.colors[STATUS_COLORS[props.statusColor]]};
  color: ${(props) => props.theme.colors['yellow-dark']};

  ${({ statusColor, theme }) =>
    statusColor === 'purple' &&
    css`
      svg {
        color: ${theme.colors.white};
      }
    `}

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
