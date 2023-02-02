import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const HomeContent = styled.div`
  display: flex;
  padding: 94px 160px;
  justify-content: space-between;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    color: #272221;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #403937;
    margin-top: 16px;
    margin-bottom: 56px;
  }
`

export const Purchase = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  div {
    display: flex;
    align-items: center;
    margin-top: 10px;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #574f4d;
      margin: 0;
      margin-left: 10px;
      flex-shrink: 0;
    }
  }
`
