import { useState, useContext } from 'react'
import { CheckoutInfoContext } from './Register.js'
import { ProductsDataContext } from './cartContext.js'
import Step from './step.jsx'
import Form from './form.jsx'
import Progress from './progress.jsx'
import registerStyle from '../style/register.module.css'


function RegisterTitle() {
  return <h2 className={registerStyle.registerTitle}>結帳</h2>;
}

export default function Register() {
  const info = useContext(CheckoutInfoContext)
  // 傳入小計金額
  const { total } = useContext(ProductsDataContext);
  // 設定status初始狀態
  const [status, setStatus] = useState('address');
  const [checkoutInfo, setCheckInfo] = useState(info)
  // 表單切換event handler
  function handleProgress(form) {
    setStatus(form)
  }
  // 信用卡結帳資料handle eventer
  function handleCheckout(event) {
    const { name, value } = event.target
    setCheckInfo({
      ...checkoutInfo,
      [name]: value
    })
  }
  // 確認結帳handle eventer
  function handleSubmit(event) {
    event.preventDefault()
    console.log(`
      信用卡使用者: ${checkoutInfo.userName}
      信用卡卡號: ${checkoutInfo.cardNumber}
      信用卡有效期限: ${checkoutInfo.cardDate}
      信用卡cvc/ccc: ${checkoutInfo.cardCvc}
      總計金額: ${total}
      `);
  }

  return (
    <CheckoutInfoContext.Provider value={{ status, checkoutInfo, handleCheckout, handleSubmit, handleProgress }}>
      <section
        className={registerStyle.registerContainer}
        data-phase="1"
        data-total-price={total}
      >
        <RegisterTitle />
        <Step />
        <Form />
        <Progress />
      </section>
    </CheckoutInfoContext.Provider>
  );
}