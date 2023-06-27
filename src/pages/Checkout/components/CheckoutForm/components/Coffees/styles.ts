import styled from 'styled-components'

export const CoffeesContainer = styled.div`
  max-height: 13rem;
  overflow: auto;
`

export const CartSummary = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-base-button);
  padding-bottom: 1.875rem;

  & + div {
    margin-top: 1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  img {
    height: 4rem;
    width: 4rem;
    margin-right: 1.25rem;
  }

  strong {
    font-weight: bold;
    font-size: 1rem;
    line-height: 130%;
    color: var(--color-base-text);
    margin-left: auto;
  }
`
export const CoffeeSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    line-height: 130%;
    color: var(--color-base-subtitle);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    div {
      padding: 0px 0.5rem;
      height: 2rem;
      gap: 6px;

      button {
        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`

export const ButtonActions = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-base-button);
  border-radius: 6px;
  height: 2rem;
  padding: 0 0.5rem;

  button {
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: var(--color-brand-purple-dark);
    }
  }

  span {
    font-size: 1rem;
    line-height: 0;
    text-align: center;
    color: var(--color-base-title);
    padding: 0 0.25rem;
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  background: var(--color-base-button);
  border: 0;
  justify-content: center;
  transition: background-color 0.2s;

  span {
    font-size: 0.75rem;
    color: var(--color-base-text);
    text-transform: uppercase;
  }

  &:hover {
    background: var(--color-base-hover);
  }
`
