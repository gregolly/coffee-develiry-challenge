import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input:focus {
        outline: 1px solid ${({ theme }) => theme.colors['yellow-dark']}
    }

    ::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
        font-size: 0.875rem;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
