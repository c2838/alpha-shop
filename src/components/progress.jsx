import rightArrow from '../assets/right-arrow.svg'
import leftArrow from "../assets/left-arrow.svg";
import progressStyle from '../style/progress.module.css'

export default function Progress({ status, onNext, onPrev }) {
  return (
    <section className={progressStyle.progressContainer}>
      {status === "address" && (
        <section className={progressStyle.btnGroupFirst} data-phase="address">
          <button className={progressStyle.nextBtn} onClick={onNext}>
            下一步
            <object
              data={rightArrow}
              className={progressStyle.cursorPointRight}
            ></object>
          </button>
        </section>
      )}
      {status === "shipping" && (
        <section className={progressStyle.btnGroupSecond} data-phase="shipping">
          <button className={progressStyle.prevBtn} onClick={onPrev}>
            <object
              data={leftArrow}
              className={progressStyle.cursorPointLeft}
            ></object>
            上一步
          </button>
          <button className={progressStyle.nextBtn} onClick={onNext}>
            下一步
            <object
              data={rightArrow}
              className={progressStyle.cursorPointRight}
            ></object>
          </button>
        </section>
      )}
      {status === "checkout" && (
        <section
          className={progressStyle.btnGroupThird}
          data-phase="credit-card"
        >
          <button className={progressStyle.prevBtn} onClick={onPrev}>
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