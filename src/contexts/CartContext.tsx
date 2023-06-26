import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

interface CartContextProps {
  children: ReactNode
}

interface CoffeesInCart extends Coffee {
  quantity: number
}

interface CheckoutFormData {
  cep: number
  street: string
  numberAddress: number
  complement?: string
  neighborhood: string
  city: string
  uf: string
  paymentOption: 'credit' | 'debit' | 'money'
}

interface CartContextData {
  coffeesInCart: CoffeesInCart[]
  addCoffeeToCart: (coffee: CoffeesInCart) => void
  removeCoffee: (id: number) => void
  checkoutData: CheckoutFormData
  getDeliveryAddressData: (data: CheckoutFormData) => void
  resetCoffeesInCart: () => void
  changeQuantityValueInCart: (
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) => void
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeesInCart[]>(() => {
    const storagedCoffees = localStorage.getItem(
      '@coffee-delivery:coffeesInCart-state-1.0.0',
    )

    if (storagedCoffees) {
      return JSON.parse(storagedCoffees)
    } else {
      return []
    }
  })

  const [checkoutData, setCheckoutData] = useState({} as CheckoutFormData)

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesInCart)

    localStorage.setItem(
      '@coffee-delivery:coffeesInCart-state-1.0.0',
      stateJSON,
    )
  }, [coffeesInCart])

  function addCoffeeToCart(coffee: CoffeesInCart) {
    const isCoffeeAlreadyInCart = coffeesInCart.findIndex(
      (coffeeIndex) => coffeeIndex.id === coffee.id,
    )

    /*
     * Adicionar o café ao carrinho
     */
    if (isCoffeeAlreadyInCart === -1) {
      setCoffeesInCart((coffeesInCart) => [...coffeesInCart, coffee])
      console.log(coffeesInCart)
    }

    /*
     * Adicionar um novo quantity ao café ja adicionado
     */
    if (isCoffeeAlreadyInCart !== -1) {
      setCoffeesInCart((coffeesInCart) =>
        coffeesInCart.map((coffeeIndex) =>
          coffeeIndex.id === coffee.id
            ? {
                ...coffeeIndex,
                quantity: coffee.quantity + coffeeIndex.quantity,
              }
            : coffeeIndex,
        ),
      )
    }
  }

  function changeQuantityValueInCart(
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) {
    const isCoffeeAlreadyInCart = coffeesInCart.findIndex((coffeeIndex) => {
      return coffeeIndex.id === coffeeId
    })

    if (isCoffeeAlreadyInCart >= 0) {
      setCoffeesInCart((coffeesInCart) =>
        coffeesInCart.map((coffee) =>
          coffee.id === coffeeId
            ? {
                ...coffee,
                quantity:
                  type === 'increase'
                    ? coffee.quantity + 1
                    : coffee.quantity - 1,
              }
            : coffee,
        ),
      )
    }
  }

  function removeCoffee(id: number) {
    const filteredCoffees = coffeesInCart.filter((coffee) => {
      return coffee.id !== id
    })
    setCoffeesInCart(filteredCoffees)
  }

  function getDeliveryAddressData(data: CheckoutFormData) {
    setCheckoutData(data)
  }

  function resetCoffeesInCart() {
    setCoffeesInCart([])
  }

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        coffeesInCart,
        removeCoffee,
        checkoutData,
        getDeliveryAddressData,
        resetCoffeesInCart,
        changeQuantityValueInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
