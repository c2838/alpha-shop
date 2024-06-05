import FormAddress from './form_address.jsx'
import FormShipping from './form_shipping.jsx'
import FormCheckout from './form_checkout.jsx'

function RegisterTitle() {
  return <h2 className="register-title col col-12">結帳</h2>;
}

function RegisterProgress() {
  return (
    <section className="progress-container col col-12">
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <span className="text">1</span>
        </span>
        <span className="progress-label">寄送地址</span>
      </span>
      <span className="progress-bar" data-order="1"></span>
      <span className="progress-group" data-phase="shipping">
        <span className="progress-icon">
          <span className="text">2</span>
        </span>
        <span className="progress-label">運送方式</span>
      </span>
      <span className="progress-bar" data-order="2"></span>
      <span className="progress-group" data-phase="credit-card">
        <span className="progress-icon">
          <span className="text">3</span>
        </span>
        <span className="progress-label">付款資訊</span>
      </span>
    </section>
  );
}


export default function Register() {
  return (
    <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
      <RegisterTitle />
      <RegisterProgress />
      <section className="form-container col col-12">
        <FormAddress />
      </section>
    </section>
  )
}