import rightArrow from '../assets/right-arrow.svg'
import leftArrow from "../assets/left-arrow.svg";
import progressStyle from '../style/progress.module.css'

export default function Progress({ status, onAddress, onShipping, onCheckout }) {
  return (
    <section className={progressStyle.progressContainer}>
      {/* 地址表單用btn */}
      {status === "address" && (
        <section className={progressStyle.btnGroupFirst} data-phase="address">
          <button className={progressStyle.nextBtn} onClick={onShipping}>
            下一步
            <object
              data={rightArrow}
              className={progressStyle.cursorPointRight}
            ></object>
          </button>
        </section>
      )}
      {/* 運送表單用btn */}
      {status === "shipping" && (
        <section className={progressStyle.btnGroupSecond} data-phase="shipping">
          <button className={progressStyle.prevBtn} onClick={onAddress}>
            <object
              data={leftArrow}
              className={progressStyle.cursorPointLeft}
            ></object>
            上一步
          </button>
          <button className={progressStyle.nextBtn} onClick={onCheckout}>
            下一步
            <object
              data={rightArrow}
              className={progressStyle.cursorPointRight}
            ></object>
          </button>
        </section>
      )}
      {/* 結帳用btn */}
      {status === "checkout" && (
        <section
          className={progressStyle.btnGroupThird}
          data-phase="credit-card"
        >
          <button className={progressStyle.prevBtn} onClick={onShipping}>
            <object
              data={leftArrow}
              className={progressStyle.cursorPointLeft}
            ></object>
            上一步
          </button>
          <button className={progressStyle.nextBtn}>確認下單</button>
        </section>
      )}
    </section>
  );
}