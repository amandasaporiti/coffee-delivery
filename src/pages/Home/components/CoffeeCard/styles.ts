import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-base-card);
  border-radius: 6px 36px;
  margin-top: 2.125rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
  }

  h3 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 130%;
    color: var(--color-base-subtitle);
    text-align: center;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: var(--color-base-label);
    margin: 0.5rem 0 2.0625rem;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const CoffeeType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    margin: 0.75rem 0 1rem;
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
    color: var(--color-brand-yellow-dark);
    padding: 0.25rem 0.5rem;
    background: var(--color-brand-yellow-light);
    border-radius: 100px;
    text-align: center;
  }
`

export const Price = styled.span`
  font-size: 0.875rem;
  line-height: 130%;

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    color: var(--color-base-text);
  }
`

export const ButtonActions = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-base-button);
  border-radius: 6px;
  padding: 0.6875rem 0.5rem;

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

export const NavigateToCartButton = styled.button`
  border: 0;
  background: var(--color-brand-purple-dark);
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-brand-purple);
  }
`
