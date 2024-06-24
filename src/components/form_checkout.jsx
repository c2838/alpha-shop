import { useContext } from 'react';
import checkoutStyle from '../style/formCheckout.module.css'
import { CheckoutInfoContext } from './Register';

export default function FormCheckout() {
  const { checkoutInfo, handleCheckout: onCheckout } = useContext(CheckoutInfoContext)
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className={checkoutStyle.formTitle}>付款資訊</h3>
      <section className={checkoutStyle.formBody}>
        <div className={checkoutStyle.inputContainer}>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className={checkoutStyle.inputLabel}>持卡人姓名</div>
            <input
              className={checkoutStyle.input}
              type="text"
              placeholder="John Doe"
              name="userName"
              value={checkoutInfo.userName}
              onChange={onCheckout}
            />
          </div>
        </div>
        <div className={checkoutStyle.inputContainer}>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className={checkoutStyle.inputLabel}>卡號</div>
            <input
              className={checkoutStyle.input}
              type="text"
              placeholder="1111 2222 3333 4444"
              name="cardNumber"
              value={checkoutInfo.cardNumber}
              onChange={onCheckout}
            />
          </div>
        </div>
        <div className={checkoutStyle.inputContainerDate}>
          <div className={"input-group input-w-lg-3 input-w-sm-s3"}>
            <div className={checkoutStyle.inputLabel}>有效期限</div>
            <input
              className={checkoutStyle.inputDate}
              type="text"
              placeholder="MM/YY"
              name="cardDate"
              value={checkoutInfo.cardDate}
              onChange={onCheckout}
            />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className={checkoutStyle.inputLabel}>CVC / CCV</div>
            <input
              className={checkoutStyle.inputCvc}
              type="text"
              placeholder="123"
              name="cardCvc"
              value={checkoutInfo.cardCvc}
              onChange={onCheckout}
            />
          </div>
        </div>
      </section>
    </form>
  );
}