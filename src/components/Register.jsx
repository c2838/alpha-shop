import { useState } from 'react'
import ProgressStep from './step.jsx'
import Form from './form.jsx'
import ProgressControl from './progress.jsx'
import registerStyle from '../style/register.module.css'


function RegisterTitle() {
  return <h2 className={registerStyle.registerTitle}>結帳</h2>;
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
      <ProgressStep 
        status={status}
      />
      <Form 
        status={status}
      />
      <ProgressControl
        status={status}
        onNext={handleProgressNext}
        onPrev={handleProgressPrev}
      />
    </section>
  );
}