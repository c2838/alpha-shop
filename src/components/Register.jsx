import FormAddress from './form_address.jsx'
import FormShipping from './form_shipping.jsx'
import FormCheckout from './form_checkout.jsx'
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
  return (
    <section className={registerStyle.registerContainer} data-phase="1" data-total-price="0">
      <RegisterTitle />
      <RegisterProgress />
      <section className="form-container col col-12">
        <FormAddress />
      </section>
    </section>
  )
}