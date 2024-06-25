import { createContext } from "react";

const checkoutInfo = {
  userName: '',
  cardNumber: '',
  cardDate: '',
  cardCvc: ''
}

export const CheckoutInfoContext = createContext(checkoutInfo)