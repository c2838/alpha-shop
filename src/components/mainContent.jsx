import { useState } from 'react'
import Register from "./Register.jsx"
import Cart from "./cart.jsx"
import mainStyle from "../style/mainContent.module.css"


export default function Main() {
  const [shippingFee, setShippingFee] = useState(0)

  function handleRadio(event) {
    setShippingFee(event.target.value)
  }
  return (
    <main>
      <div className={mainStyle.mainContainer}>
        <Register 
          shippingFee={shippingFee}
          onChangeFee={handleRadio}
        />
        <Cart
          shippingFee={shippingFee}
        />
      </div>
    </main>
  );
}