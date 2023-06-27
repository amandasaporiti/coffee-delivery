import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  CheckoutFormContainer,
  CompleteOrderContainer,
  CompleteOrder,
  DeliveryInformationFields,
  PaymentMethods,
  PaymentOptions,
  PaymentCard,
  SelectedCoffees,
  CartContainer,
} from './styles'

import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CartContext'
import { PriceSummary } from './components/PriceSummary'
import { Coffees } from './components/Coffees'

const checkoutFormSchema = z.object({
  cep: z.number(),
  street: z.string().min(1),
  numberAddress: z.number().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().min(2).max(2).toUpperCase(),
  paymentOption: z.enum(['credit', 'debit', 'money']),
})

type checkoutInputData = z.infer<typeof checkoutFormSchema>

export function CheckoutForm() {
  const navigate = useNavigate()

  const { getDeliveryAddressData, resetCoffeesInCart } = useContext(CartContext)

  const { register, handleSubmit, control, reset, watch } =
    useForm<checkoutInputData>({
      resolver: zodResolver(checkoutFormSchema),
      defaultValues: {
        street: '',
        complement: '',
        neighborhood: '',
        city: '',
        uf: '',
      },
    })

  function handleCreateOrder(data: checkoutInputData) {
    getDeliveryAddressData(data)
    reset()
    resetCoffeesInCart()
    navigate('/delivery')
  }

  const formField = watch('cep')
  const isFormDisabled = !formField

  return (
    <CheckoutFormContainer>
      <form onSubmit={handleSubmit(handleCreateOrder)}>
        <CompleteOrderContainer>
          <h2>Complete seu pedido</h2>
          <CompleteOrder>
            <div>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <DeliveryInformationFields>
              <input
                type="number"
                placeholder="CEP"
                className="cep"
                {...register('cep', { valueAsNumber: true })}
              />

              <input
                type="text"
                placeholder="Rua"
                className="rua"
                {...register('street')}
              />

              <input
                type="number"
                placeholder="Número"
                className="numberAddress"
                {...register('numberAddress', { valueAsNumber: true })}
              />

              <input
                type="text"
                placeholder="Complemento"
                className="complement"
                {...register('complement')}
              />

              <input
                type="text"
                placeholder="Bairro"
                className="bairro"
                {...register('neighborhood')}
              />

              <input
                type="text"
                placeholder="Cidade"
                className="cidade"
                {...register('city')}
              />

              <input
                type="text"
                placeholder="UF"
                className="uf"
                {...register('uf')}
              />
            </DeliveryInformationFields>
          </CompleteOrder>

          <PaymentMethods>
            <div>
              <CurrencyDollarSimple size={22} color="#8047F8" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <Controller
              name="paymentOption"
              control={control}
              render={({ field }) => (
                <PaymentOptions
                  onValueChange={field.onChange}
                  value={field.value}
                  required
                >
                  {/* Cartão de Crédito */}
                  <PaymentCard type="button" value="credit">
                    <CreditCard size={16} color="#8047F8" />
                    <span>Cartão de crédito</span>
                  </PaymentCard>
                  {/* Cartão de Débito */}
                  <PaymentCard type="button" value="debit">
                    <Bank size={16} color="#8047F8" />
                    <span>Cartão de débito</span>
                  </PaymentCard>
                  {/* Dinheiro */}
                  <PaymentCard type="button" value="money">
                    <Money size={16} color="#8047F8" />
                    <span>Dinheiro</span>
                  </PaymentCard>
                </PaymentOptions>
              )}
            />
          </PaymentMethods>
        </CompleteOrderContainer>

        <SelectedCoffees>
          <h2>Cafés selecionados</h2>
          <CartContainer>
            <Coffees />
            <PriceSummary isFormDisabled={isFormDisabled} />
          </CartContainer>
        </SelectedCoffees>
      </form>
    </CheckoutFormContainer>
  )
}
