import styled from 'styled-components'

export const PriceSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  margin-top: 1.5rem;

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    span {
      margin-right: auto;
      font-size: 0.875rem;
      line-height: 130%;
      color: var(--color-base-text);
    }

    p {
      margin-left: auto;
      font-size: 1rem;
      line-height: 130%;
      color: var(--color-base-text);
    }

    h3 {
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 130%;
      color: var(--color-base-subtitle);
    }

    strong {
      margin-left: auto;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
      color: var(--color-base-subtitle);
    }
  }
`

export const ConfirmOrderButton = styled.button`
  background: var(--color-brand-yellow);
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 160%;
  padding: 0.75rem;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-base-white);
  border: 0;
  margin-top: 0.75rem;
  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: var(--color-brand-yellow-dark);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
