import { useContext } from 'react';
import { CheckoutInfoContext } from './Register';
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from "../assets/left-arrow.svg";
import progressStyle from '../style/progress.module.css'

export default function Progress() {
  const { status, handleSubmit: onSubmit, handleProgress: onProgress } = useContext(CheckoutInfoContext)
  return (
    <section className={progressStyle.progressContainer}>
      {/* 地址表單用btn */}
      {status === "address" && (
        <section className={progressStyle.btnGroupFirst} data-phase="address">
          <button className={progressStyle.nextBtn} onClick={() => onProgress("shipping")}>
            下一步
            <img
              src={rightArrow}
              className={progressStyle.cursorPointRight}
              alt="right-arrow"
            />
          </button>
        </section>
      )}
      {/* 運送表單用btn */}
      {status === "shipping" && (
        <section className={progressStyle.btnGroupSecond} data-phase="shipping">
          <button className={progressStyle.prevBtn} onClick={() => onProgress("address")}>
            <img
              src={leftArrow}
              className={progressStyle.cursorPointLeft}
              alt="left-arrow"
            />
            上一步
          </button>
          <button className={progressStyle.nextBtn} onClick={() => onProgress("checkout")}>
            下一步
            <img
              src={rightArrow}
              className={progressStyle.cursorPointRight}
              alt="right-arrow"
            />
          </button>
        </section>
      )}
      {/* 結帳用btn */}
      {status === "checkout" && (
        <section
          className={progressStyle.btnGroupThird}
          data-phase="credit-card"
        >
          <button className={progressStyle.prevBtn} onClick={() => onProgress("shipping")}>
            <img
              src={leftArrow}
              className={progressStyle.cursorPointLeft}
              alt="left-arrow"
            />
            上一步
          </button>
          <button className={progressStyle.nextBtn} onClick={onSubmit}>確認下單</button>
        </section>
      )}
    </section>
  );
}