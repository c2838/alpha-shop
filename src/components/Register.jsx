import { useState } from 'react'
import Form from './form.jsx'
import ProgressControl from './progress.jsx'
import registerStyle from '../style/register.module.css'


function RegisterTitle() {
  return <h2 className={registerStyle.registerTitle}>結帳</h2>;
}

function RegisterProgress() {
  return (
    <section className={registerStyle.progressContainer}>
      <span className={registerStyle.progressGroup} data-phase="address">
        <span className={registerStyle.progressIconOne}>
          <span className={registerStyle.progressNumberOne}>1</span>
        </span>
        <span className={registerStyle.progressLabelActive}>寄送地址</span>
      </span>
      <span className={registerStyle.progressLine} data-order="1"></span>
      <span className={registerStyle.progressGroup} data-phase="shipping">
        <span className={registerStyle.progressIcon}>
          <span className={registerStyle.progressNumber}>2</span>
        </span>
        <span className={registerStyle.progressLabel}>運送方式</span>
      </span>
      <span className={registerStyle.progressLine} data-order="2"></span>
      <span className={registerStyle.progressGroup} data-phase="credit-card">
        <span className={registerStyle.progressIcon}>
          <span className={registerStyle.progressNumber}>3</span>
        </span>
        <span className={registerStyle.progressLabel}>付款資訊</span>
      </span>
    </section>
  );
}


export default function Register() {
  const [status, setStatus] = useState('address');
  const [progress, setProgress] = useState(1)
  console.log(progress)
  function handleProgressNext() {
    setProgress(progress + 1)
    console.log(progress);
    if (progress === 2) {
      setStatus('shipping')
    } else if (progress === 3) {
      setStatus("checkout");
    }
  }

  function handleProgressPrev() {
    setProgress(progress - 1)
    console.log(progress);
    if (progress === 2) {
      setStatus('shipping')
    } else if (progress === 1) {
      setStatus("address");
    }
  }

  return (
    <section
      className={registerStyle.registerContainer}
      data-phase="1"
      data-total-price="0"
    >
      <RegisterTitle />
      <RegisterProgress />
      <Form status={status} />
      <ProgressControl
        status={status}
        onNext={handleProgressNext}
        onPrev={handleProgressPrev}
      />
    </section>
  );
}