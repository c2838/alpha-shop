import { useState, useContext } from 'react'
import { ShippingFeeContext } from './mainContent.js'
import Register from "./Register.jsx"
import Cart from "./cart.jsx"
import mainStyle from "../style/mainContent.module.css"


export default function Main() {
  const fee = useContext(ShippingFeeContext)
  const [shippingFee, setShippingFee] = useState(fee)
  
  // 選擇運費時可設定運費金額handle eventer
  function handleRadio(event) {
    setShippingFee(event.target.value)
  }

  return (
    <main>
      <ShippingFeeContext.Provider value={{ shippingFee, handleRadio }}>
        <div className={mainStyle.mainContainer}>
          <Register />
          <Cart />
        </div>
      </ShippingFeeContext.Provider>
    </main>
  );
}