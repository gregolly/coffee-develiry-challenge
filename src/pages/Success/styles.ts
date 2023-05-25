import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  width: 80rem;
  margin: 80px auto;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const ContainerMainContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerOrderInfo = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  min-width: 32rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
`
