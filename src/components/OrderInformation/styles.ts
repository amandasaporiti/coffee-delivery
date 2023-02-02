import styled from "styled-components"

export const OrderInformationContainer = styled.form`
  display: grid;
  grid-template-columns: 600px 1fr;
  justify-content: center;
  padding: 40px 160px 160px;
  gap: 32px;
`
export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: #403937;
  }
`

export const DeliveryAdress = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f2f2;
  border-radius: 6px;
  padding: 40px;
  gap: 32px;
  width: 100%;
`

export const DeliveryAdressHeader = styled.header`
  display: flex;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #403937;
      font-family: "Roboto";
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #574f4d;
      font-family: "Roboto";
    }
  }
`
export const DeliveryAdressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .cep {
    width: 200px;
  }

  .rua {
    display: flex;
    flex: 1;
  }

  .number-complement {
    display: flex;
    gap: 12px;
    width: 100%;

    .numero {
      width: 100%;
    }

    .cidade {
      width: 276px;
    }

    .bairro {
      width: 100%;
    }

    .complemento {
      width: 348px;
    }
  }
`

export const DeliveryPaymentContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  width: 100%;

  div {
    display: flex;
    padding-left: 12px;
    height: 51px;
    align-items: center;
    gap: 8px;
    background: #e6e5e5;
    border-radius: 6px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    color: #574f4d;
  }
`

export const SelectedCooffes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: #403937;
  }
`
export const SelectedCooffeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 498px;
  padding: 40px;
  background: #f3f2f2;
  border-radius: 6px 44px;
`
export const CooffesOrder = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 5px;
  border-bottom: 1px solid #e6e5e5;

  & + div {
    margin-top: 24px;
  }

  img {
    height: 64px;
    width: 64px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: #574f4d;
  }

  .column-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #403937;
    }
  }
  .buttons-action {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    .add-item {
      background: #e6e5e5;
      border-radius: 6px;
      border: 0;
      display: flex;
      align-items: center;
      padding: 9px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 0;
      color: #272221;
      gap: 7px;
    }

    .remove-item {
      background: #e6e5e5;
      border-radius: 6px;
      border: 0;
      display: flex;
      align-items: center;
      padding: 9px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 0;
      text-transform: uppercase;
      color: #574f4d;
      gap: 4px;
      transition: background-color 0.1s;

      :hover {
        background: #d7d5d5;
      }
    }
  }
`

export const TotalItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #574f4d;
    }

    strong {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
      color: #403937;
    }
  }

  button {
    background: #dbac2c;
    border-radius: 6px;
    text-transform: uppercase;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: #ffffff;
    border: 0;
    padding: 12px 0;
    text-align: center;
    transition: background-color 0.1s;
    margin-top: 12px;

    :hover {
      background-color: #c47f17;
    }
  }
`
