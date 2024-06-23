import stepStyle from '../style/step.module.css'
import completeIcon from '../assets/pg-complete.svg'

function FirstStep({ status }) {
  if (status === 'address') {
    return (
      <>
        <span className={stepStyle.progressIconOne}>
          <span className={stepStyle.progressNumberOne}>1</span>
        </span>
        <span className={stepStyle.progressLabelActive}>寄送地址</span>
      </>
    );
  } else {
    // 表單完成後式樣
    return (
      <>
        <span className={stepStyle.progressIconChecked}>
          <img src={completeIcon} alt="complete-icon" />
        </span>
        <span className={stepStyle.progressLabelActive}>寄送地址</span>
      </>
    );
  }
}

function SecondStep({ status }) {
  if (status === 'address') {
    // 未進入表單前式樣
    return (
      <>
        <span className={stepStyle.progressIcon}>
          <span className={stepStyle.progressNumber}>2</span>
        </span>
        <span className={stepStyle.progressLabel}>運送方式</span>
      </>
    );
  } else if (status === "shipping") {
    // 表單使用中式樣
    return (
      <>
        <span className={stepStyle.progressIconActive}>
          <span className={stepStyle.progressNumberActive}>2</span>
        </span>
        <span className={stepStyle.progressLabelActive}>運送方式</span>
      </>
    );
  } else {
    return (
      // 表單完成後式樣
      <>
        <span className={stepStyle.progressIconChecked}>
          <img src={completeIcon} alt="complete-icon" />
        </span>
        <span className={stepStyle.progressLabelActive}>運送方式</span>
      </>
    );
  }
}

function FinalStep({ status }) {
  if (status === 'checkout') {
    // 表單未使用式樣
    return (
      <>
        <span className={stepStyle.progressIconActive}>
          <span className={stepStyle.progressNumberActive}>3</span>
        </span>
        <span className={stepStyle.progressLabelActive}>付款資訊</span>
      </>
    );
  } else {
    // 表單使用中式樣
    return (
      <>
        <span className={stepStyle.progressIcon}>
          <span className={stepStyle.progressNumber}>3</span>
        </span>
        <span className={stepStyle.progressLabel}>付款資訊</span>
      </>
    );
  }
}

export default function Step({ status }) {
  return (
    <section className={stepStyle.progressContainer}>
      <span className={stepStyle.progressGroup} data-phase="address">
        <FirstStep status={status} />
      </span>
      <span className={stepStyle.progressLine} data-order="1"></span>
      <span className={stepStyle.progressGroup} data-phase="shipping">
       <SecondStep status={status}/>
      </span>
      <span className={stepStyle.progressLine} data-order="2"></span>
      <span className={stepStyle.progressGroup} data-phase="credit-card">
        <FinalStep status={status} />
      </span>
    </section>
  );
}
