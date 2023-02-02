import { createContext, useState, ReactNode } from "react"

interface CoffeItensProviderProps {
  children: ReactNode
}

interface Coffees {
  id: number
  name: string
  coffee_type: string
  coffee_url: string
  description: string
  price: number
}

interface CoffeeItensContextData {
  // itensQuantityInCar: number
  // addItemToCard: (id: number) => void
  // removeItemToCard: (id: number) => void
  coffees: Coffees[]
}

export const CoffeeItensContext = createContext<CoffeeItensContextData>(
  {} as CoffeeItensContextData
)

export const CoffeeItensProvider = ({ children }: CoffeItensProviderProps) => {
  const coffees = [
    {
      id: 1,
      name: "Expresso Tradicional",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/tradicional.svg",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      id: 2,
      name: "Expresso Americano",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/americano.svg",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
    },
    {
      id: 3,
      name: "Expresso Cremoso",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/cremoso.svg",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      id: 4,
      name: "Expresso Gelado",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/gelado.svg",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
    {
      id: 5,
      name: "Café com Leite",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/cafe-leite.svg",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
    },
    {
      id: 6,
      name: "Latte",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/latte.svg",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      id: 7,
      name: "Capuccino",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/capuccino.svg",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      id: 8,
      name: "Macchiato",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/macchiato.svg",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
    },
    {
      id: 9,
      name: "Mocaccino",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/mocaccino.svg",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      id: 10,
      name: "Chocolate Quente",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/chocolate-quente.svg",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
    },
    {
      id: 11,
      name: "Cubano",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/cubano.svg",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
    },
    {
      id: 12,
      name: "Havaiano",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/havaiano.svg",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
    },
    {
      id: 13,
      name: "Árabe",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/arabe.svg",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
    },
    {
      id: 14,
      name: "Irlandês",
      coffee_type: "Tradicional",
      coffee_url: "http://localhost:5173/src/assets/irlandes.svg",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
    },
  ]

  // const [itensQuantityInCar, setItensQuantityInCar] = useState(1)

  // const addItemToCard = (id: number) => {
  //   coffees.map((item) => {
  //     if (item.id === id) {
  //       console.log(`${item.id} + ${id}`)
  //       setItensQuantityInCar((state) => {
  //         return state + 1
  //       })
  //     } else {
  //       setItensQuantityInCar((state) => {
  //         return state
  //       })
  //     }
  //   })
  // }

  // const removeItemToCard = (id: number) => {
  //   coffees.map((item) => {
  //     if (item.id === id) {
  //       setItensQuantityInCar((state) => {
  //         return state > 0 ? state - 1 : state
  //       })
  //     } else {
  //       return
  //     }
  //   })
  // }

  return (
    <CoffeeItensContext.Provider value={{ coffees }}>
      {children}
    </CoffeeItensContext.Provider>
  )
}
