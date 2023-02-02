import { GlobalStyles } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CoffeeItensProvider } from "./contexts/CoffeeItensContext"

export const App = () => {
  return (
    <CoffeeItensProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </CoffeeItensProvider>
  )
}
