import { useContext } from "react";
import { CheckoutInfoContext } from "../../context/RegisterContext";
import stepStyle from "./step.module.css";
import completeIcon from "../../assets/pg-complete.svg";

function FirstStep() {
  const { status } = useContext(CheckoutInfoContext);
  const statusAddress = status === "address";
    return (
      <>
        <span className={statusAddress ? stepStyle.progressIconOne : stepStyle.progressIconChecked}>
          {statusAddress ? 
            <span className={stepStyle.progressNumberOne}>1</span> : 
            <img src={completeIcon} alt="complete-icon" />}
        </span>
        <span className={stepStyle.progressLabelActive}>寄送地址</span>
      </>
    );
}

function SecondStep() {
  const { status } = useContext(CheckoutInfoContext);
  switch (status) {
    case "address" :
      return (
        <>
          <span className={stepStyle.progressIcon}>
            <span className={stepStyle.progressNumber}>2</span>
          </span>
          <span className={stepStyle.progressLabel}>運送方式</span>
        </>
      );
    case "shipping" :
      return (
        <>
          <span className={stepStyle.progressIconActive}>
            <span className={stepStyle.progressNumberActive}>2</span>
          </span>
          <span className={stepStyle.progressLabelActive}>運送方式</span>
        </>
      );
    case "checkout" :
      return (
        <>
          <span className={stepStyle.progressIconChecked}>
            <img src={completeIcon} alt="complete-icon" />
          </span>
          <span className={stepStyle.progressLabelActive}>運送方式</span>
        </>
      );
  }
}

function FinalStep() {
  const { status } = useContext(CheckoutInfoContext);
  const statusCheckout = (status === 'checkout')
    // 表單未使用式樣
    return (
      <>
        <span className={statusCheckout ? stepStyle.progressIconActive : stepStyle.progressIcon}>
          <span className={statusCheckout ? stepStyle.progressNumberActive : stepStyle.progressNumber}>3</span>
        </span>
        <span className={statusCheckout ? stepStyle.progressLabelActive : stepStyle.progressLabel}>付款資訊</span>
      </>
    );
}

export default function Step() {
  return (
    <section className={stepStyle.progressContainer}>
      <span className={stepStyle.progressGroup} data-phase="address">
        <FirstStep />
      </span>
      <span className={stepStyle.progressLine} data-order="1" />
      <span className={stepStyle.progressGroup} data-phase="shipping">
        <SecondStep />
      </span>
      <span className={stepStyle.progressLine} data-order="2" />
      <span className={stepStyle.progressGroup} data-phase="credit-card">
        <FinalStep />
      </span>
    </section>
  );
}
