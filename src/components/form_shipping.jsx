import { useContext } from "react";
import { ShippingFeeContext } from "./mainContent";
import shippingStyle from '../style/formShipping.module.css'


export default function FormShipping() {
  // 使用context傳入運費變數與handle eventer
  const { shippingFee, handleRadio: onChangeFee} = useContext(ShippingFeeContext);

  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className={shippingStyle.formTitle}>運送方式</h3>
      <section className={shippingStyle.formBody}>
        <div className={shippingStyle.radioGroup} data-price="0">
          <input
            className={shippingStyle.input}
            id="shipping-standard"
            type="radio"
            name="shipping"
            value={0}
            checked={shippingFee === "0"}
            onChange={onChangeFee}
          />
          <label
            htmlFor="shipping-standard"
            className={shippingStyle.radioLabel}
          ></label>
          <div className={shippingStyle.radioInfo}>
            <div className={shippingStyle.expressInfo}>
              <div className="text">標準運送</div>
              <div className="price">免費</div>
            </div>
            <div className={shippingStyle.expressPeriod}>約 3~7 個工作天</div>
          </div>
          <div className="radio-box-border"></div>
        </div>
        <div className={shippingStyle.radioGroup} data-price="500">
          <input
            className={shippingStyle.input}
            id="shipping-dhl"
            type="radio"
            name="shipping"
            value={500}
            checked={shippingFee === "500"}
            onChange={onChangeFee}
          />
          <label
            htmlFor="shipping-dhl"
            className={shippingStyle.radioLabel}
          ></label>
          <div className={shippingStyle.radioInfo}>
            <div className={shippingStyle.expressInfo}>
              <div className={shippingStyle.dhlText}>DHL 貨運</div>
              <div className="price">$500</div>
            </div>
            <div className={shippingStyle.expressPeriod}>48 小時內送達</div>
          </div>
          <div className="radio-box-border"></div>
        </div>
      </section>
    </form>
  );
}