import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 1120px;
  margin: 0 auto;
  background-color: var(--color-base-background);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: var(--color-brand-purple-light);
      padding: 0.5rem;
      border-radius: 6px;

      span {
        color: var(--color-brand-purple-dark);
        font-size: 0.875rem;
      }
    }

    a {
      background: var(--color-brand-yellow-light);
      border-radius: 6px;
      width: 2.375rem;
      height: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }
`

export const Quantity = styled.span`
  background: var(--color-brand-yellow-dark);
  border-radius: 1000px;
  position: absolute;
  top: -0.5rem;
  right: -0.625rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: var(--color-base-white);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  width: 1.25rem;
`
