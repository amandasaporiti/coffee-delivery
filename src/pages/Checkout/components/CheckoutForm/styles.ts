import styled from 'styled-components'

import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutFormContainer = styled.main`
  margin-top: 2.5rem;

  form {
    display: grid;
    grid-template-columns: 40rem 28rem;
    width: 100%;
    gap: 2rem;
  }
`

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 130%;
    color: var(--color-base-subtitle);
    margin-bottom: 1rem;
  }
`

export const CompleteOrder = styled.div`
  padding: 2.5rem;

  div {
    display: flex;
    align-items: flex-start;

    svg {
      margin-right: 0.5rem;
      color: var(--color-brand-yellow-dark);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }
  }
`

export const DeliveryInformationFields = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 7fr 1fr;
  margin-top: 2rem;

  input {
    background: #eeeded;
    border: 1px solid var(--color-base-button);
    padding: 0.75rem;
    font-size: 0.875rem;
    line-height: 130%;
    color: var(--color-base-label);
    margin-top: 1rem;
    flex: 1;
    border-radius: 4px;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .cep {
    grid-column: 1/2;
  }

  .rua {
    grid-column: 1/4;
  }

  .numberAddress {
    grid-column: 1/2;
    margin-right: 0.75rem;
  }

  .complement {
    grid-column: 2/4;
  }

  .bairro {
    grid-column: 1/2;
    margin-right: 0.75rem;
  }

  .cidade {
    grid-column: 2/3;
    flex: 1;
    margin-right: 0.75rem;
  }

  .uf {
    width: 3.75rem;
  }
`

export const PaymentMethods = styled.div`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  div {
    display: flex;
    align-items: flex-start;

    > svg {
      margin-right: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const PaymentOptions = styled(RadioGroup.Root)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
`

export const PaymentCard = styled(RadioGroup.Item)`
  display: flex;
  border: 0;
  background: var(--color-base-button);
  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;
  transition: background-color 0.2s;
  width: 100%;

  svg {
    margin: 0;
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: var(--color-base-text);
  }

  &[data-state='unchecked']:hover {
    background: var(--color-base-hover);
  }

  &[data-state='checked'] {
    border: 1px solid var(--color-brand-purple);
    background: var(--color-brand-purple-light);
  }
`

export const SelectedCoffees = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 130%;
    color: var(--color-base-subtitle);
    margin-bottom: 1rem;
  }
`
export const CartContainer = styled.div`
  padding: 2.5rem;
`

export const PriceSummary = styled.div`
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
