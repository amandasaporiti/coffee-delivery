import styled from "styled-components"

import { ShoppingCartSimple, Plus, Minus } from "phosphor-react"

export const CooffeMenuContainer = styled.main`
  padding: 0 160px 157px 160px;

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: #403937;
    margin-bottom: 34px;
  }
`

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 32px;
`

export const MenuOptions = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 310px;
  background: #f3f2f2;
  border-radius: 6px 36px;
  margin-top: 50px;
  position: relative;

  img {
    display: flex;
    align-items: center;
    position: absolute;
    top: -30px;
  }

  .coffee-type {
    display: flex;
    align-items: center;
    position: absolute;
    top: 100px;
    justify-content: space-between;
    gap: 6px;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      text-transform: uppercase;
      color: #c47f17;
      padding: 4px 8px;
      background: #f1e9c9;
      margin-top: 3px;
      border-radius: 100px;
    }
  }

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: #403937;
    margin-top: 30px;
    position: absolute;
    top: 110px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #8d8686;
    width: 216px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    position: absolute;
    top: 170px;
  }
`

export const AddQuantityItens = styled.footer`
  display: flex;
  align-items: center;
  position: absolute;
  top: 250px;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #574f4d;
    margin-right: 23px;

    strong {
      font-family: "Baloo 2";
      font-style: normal;
      font-size: 24px;
      line-height: 130%;
      color: #574f4d;
    }
  }
  .cart-icon {
    width: 38px;
    height: 38px;
    background: #4b2995;
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.1s;

    :hover {
      background-color: #8047f8;
    }
  }
  .add-to-cart {
    display: flex;
    align-items: center;
    background: #e6e5e5;
    border-radius: 6px;
    margin-right: 8px;
    height: 38px;

    h4 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #272221;
      padding: 0 5px;
    }
    button {
      border: 0;
      cursor: pointer;
      background: none;
    }
  }
`

export const CardIcon = styled(ShoppingCartSimple)`
  height: 22px;
  width: 22px;
  color: #f3f2f2;
  margin: 0;
  padding: 0;
`

export const PlusIcon = styled(Plus)`
  height: 18px;
  width: 18px;
  color: #8047f8;
  margin: 0 5px;
`
export const MinusIcon = styled(Minus)`
  height: 18px;
  width: 18px;
  color: #8047f8;
  margin: 0 5px;
`
