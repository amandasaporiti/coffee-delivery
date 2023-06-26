import styled from 'styled-components'

export const HeroContainer = styled.article`
  width: 100%;
  margin-top: 5.375rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6.25rem 0;
`

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: var(--color-base-title);
  }

  p {
    font-size: 1.25rem;
    color: var(--color-brand-base-subtitle);
    margin: 1rem 0 4.125rem;
  }
`

export const BannerContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const BoxContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: 1rem;
      color: var(--color-base-text);
    }

    & + div {
      margin-top: 1.25rem;
    }
  }
`
interface IconContainerProps {
  boxColors: 'gray' | 'orange' | 'yellow' | 'purple'
}

const BOX_COLORS = {
  gray: `var(--color-base-text)`,
  purple: `var(--color-brand-purple)`,
  yellow: `var(--color-brand-yellow)`,
  orange: `var(--color-brand-yellow-dark)`,
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  background: ${(props) => BOX_COLORS[props.boxColors]};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`
