import { useState } from 'react'
import Step from './step.jsx'
import Form from './form.jsx'
import Progress from './progress.jsx'
import registerStyle from '../style/register.module.css'


function RegisterTitle() {
  return <h2 className={registerStyle.registerTitle}>結帳</h2>;
}

export default function Register() {
  // status都只往下傳一層，我覺得似乎無特別需要使用context，若需改進請助教再提醒~
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
      <Step status={status} />
      <Form status={status} />
      <Progress
        status={status}
        onAddress={() => handleProgress("address")}
        onShipping={() => handleProgress("shipping")}
        onCheckout={() => handleProgress("checkout")}
      />
    </section>
  );
}