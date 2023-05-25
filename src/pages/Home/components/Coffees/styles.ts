import styled from 'styled-components'

export const CoffeesContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  width: 80rem;
  margin: 2rem auto;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
