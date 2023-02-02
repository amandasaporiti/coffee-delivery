import styled from "styled-components"

export const DeliveryContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 80px 160px;
  gap: 40px;

  div {
    h2 {
      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
      color: #c47f17;
    }

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      color: #403937;
    }
  }
`

export const DeliveryInformation = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: 270px;
  border: 1px solid #dbac2c;
  border-radius: 6px 36px;
  gap: 32px;
  margin-left: 40px;
`
export const DeliveryContent = styled.div`
  display: flex;
  align-items: center;

  .icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #dbac2c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    margin-right: 12px;
  }

  .content {
    display: flex;
    flex-direction: column;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;

      color: #574f4d;
    }

    strong {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;

      color: #574f4d;
    }
  }
`

export const DeliveryContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
