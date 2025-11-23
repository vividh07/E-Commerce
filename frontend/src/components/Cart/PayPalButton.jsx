import {PayPalButtons , PayPalScriptProvider} from '@paypal/react-paypal-js'
import { data } from 'react-router-dom'

const PayPalButton = ({amount , onSuccess , onError}) => {
  return <PayPalScriptProvider
  options={{"clientId":"AT-ipAkOoZw35fpgmJFg462rmJahlRE0BqJaCCR6RLCzyX6edGHEWdp5bCr2LcTPjrqw5w5Z740J0uye", currency: "USD", }}
  >
    <PayPalButtons
    style={{layout:"vertical"}}
    createOrder={(data, actions)=>{
        return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD", // REQUIRED HERE TOO
                  value: amount,   // Must be the converted string
                },
              },
            ],
        })
    }}

    onApprove={(data, actions)=>{
        return actions.order.capture().then(onSuccess)
    }}

    onError={onError}


    />

  </PayPalScriptProvider> 
}

export default PayPalButton