import styled from 'styled-components'

export const EmptyCartContainer = styled.main`
  display: flex;
  max-width: 1100px;
  width: 100%;
  margin: 5rem auto;
  padding-top: 5rem;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    padding: 3rem;

    h2 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: var(--yellow-dark);
    }

    span {
      font-size: 1.25rem;
      line-height: 130%;
      color: var(--base-subtitle);
    }

    a {
      text-decoration: none;
      color: var(--color-brand-yellow-dark);
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  img {
    width: 35rem;
    height: 23.75rem;
    margin-top: 3rem;
  }
`
