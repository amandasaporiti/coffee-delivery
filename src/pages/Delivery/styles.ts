import styled from 'styled-components'

export const DeliveryContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 5rem;
  margin-top: 5rem;
  gap: 6.375rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: var(--color-brand-yellow-dark);
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: var(--color-base-subtitle);
    margin-top: 0.25rem;
  }
`

export const BoxDelivery = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.875rem;
  border-radius: 6px 36px;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  border: 1px solid var(--color-brand-purple);
  margin-top: 2.5rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  boxColor: 'orange' | 'purple' | 'yellow'
}

const BOX_COLORS = {
  orange: `var(--color-brand-yellow-dark)`,
  purple: `var(--color-brand-purple-dark)`,
  yellow: `var(--color-brand-yellow)`,
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${(props) => BOX_COLORS[props.boxColor]};
  border-radius: 1000px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DeliveryDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 1rem;
    line-height: 130%;
    color: var(--color-base-text);

    strong {
      font-size: 1rem;
      line-height: 130%;
      color: var(--color-base-text);
    }
  }
`

export const DeliveryImage = styled.div`
  img {
    margin-top: 7.5rem;
  }
`
