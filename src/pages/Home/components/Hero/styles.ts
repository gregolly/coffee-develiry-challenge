import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: url('./src/assets/background.png');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`

export const HeadlineContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80rem;
  margin: 0 auto;
  padding-top: 5.75rem;
  padding-bottom: 6.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  }

  h3 {
    color: #403937;
    font-size: 1.25rem;
    line-height: 130%;
    font-family: 'Roboto';
    font-weight: 400;
    margin-top: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`

export const FeaturesContainer = styled.div`
  width: 100%;
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`
