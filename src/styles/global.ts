import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --color-base-white: #ffffff;
    --color-base-background: #FAFAFA;
    --color-base-card: #F3F2F2;
    --color-base-input: #EDEDED;
    --color-base-button: #e6e5e5;
    --color-base-hover: #d7d5d5;
    --color-base-label: #8D8686;
    --color-base-text: #574F4D;
    --color-base-subtitle: #403937;
    --color-base-title: #272221;
    --color-brand-purple-dark: #4b2894;
    --color-brand-purple: #8047F8;
    --color-brand-purple-light: #ebe5f9;
    --color-brand-yellow-dark: #c47e16;
    --color-brand-yellow: #dbac2b;
    --color-brand-yellow-light: #F1E9C9;
  }
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-brand-yellow-dark);
  }

  body{
    background-color: var(--color-base-background);
    color: var(--color-base-text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button{
    cursor: pointer;
  }

`
