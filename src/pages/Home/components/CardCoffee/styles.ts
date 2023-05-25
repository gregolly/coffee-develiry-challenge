import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;

  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-size: 0.875rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const Name = styled.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Description = styled.div`
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors['purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.purple};
    }
  }
`

export const ContainerValue = styled.div`
  display: flex;
`

export const Currency = styled.div`
  font-size: 0.875rem;
`

export const Value = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Baloo 2', cursive;
  color: ${({ theme }) => theme.colors['base-text']};
`
