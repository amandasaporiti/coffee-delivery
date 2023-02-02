import styled from "styled-components"
import { MapPin, ShoppingCart } from "phosphor-react"

export const Container = styled.div`
  padding: 32px 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    background: #ebe5f9;
    border-radius: 6px;
    margin-right: 12px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #4b2995;
    padding: 10px;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #f1e9c9;
    padding: 10px;
    fill: #c47f17;
    border-radius: 6px;

    span {
      position: absolute;
      top: -9px;
      right: -8px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: #ffffff;
      background: #c47f17;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const LocationIcon = styled(MapPin)`
  width: 22px;
  height: 22px;
  margin-right: 4px;
  fill: #8047f8;
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  width: 22px;
  height: 22px;
  fill: #c47f17;
  color: #c47f17;
`
