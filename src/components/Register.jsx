import { useState } from 'react'
import ProgressStep from './step.jsx'
import Form from './form.jsx'
import ProgressControl from './progress.jsx'
import registerStyle from '../style/register.module.css'


function RegisterTitle() {
  return <h2 className={registerStyle.registerTitle}>結帳</h2>;
}

export default function Register({ shippingFee, onChangeFee }) {
  const [status, setStatus] = useState('address');
  
  // 表單切換event handler
  function handleProgress(form) {
    setStatus(form)
  }

  return (
    <section
      className={registerStyle.registerContainer}
      data-phase="1"
      data-total-price="0"
    >
      <RegisterTitle />
      <ProgressStep status={status} />
      <Form 
        status={status}
        shippingFee={shippingFee}
        onChangeFee={onChangeFee}
      />
      <ProgressControl
        status={status}
        onAddress={() => handleProgress("address")}
        onShipping={() => handleProgress("shipping")}
        onCheckout={() => handleProgress("checkout")}
      />
    </section>
  );
}