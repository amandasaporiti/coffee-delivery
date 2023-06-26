import styled from 'styled-components'

export const InputQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.5625rem 0.5rem;
  background: var(--color-base-button);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background: transparent;
    color: var(--color-brand-purple);
    transition: color 0.2s;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:hover {
      svg {
        color: var(--color-brand-purple-dark);
      }
    }
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    width: 1.25rem;
    height: 1.25rem;

    text-align: center;
    color: var(--color-base-title);
    font-size: 1rem;
    line-height: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
