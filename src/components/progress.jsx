import rightArrow from '../assets/right-arrow.svg'
import progressStyle from '../style/progress.module.css'

export default function Progress() {
  return (
    <section className={progressStyle.progressContainer}>
      <section className={progressStyle.btnGroup} data-phase="address">
        <button className={progressStyle.nextBtn}>
          下一步
          <object data={rightArrow} className={progressStyle.cursorPoint}>
          </object>
        </button>
      </section>
      {/* <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <object data="./public/icons/left-arrow.svg" className="cursor-point">
          </object>
          上一步
        </button>
        <button className="next">
          下一步
          <object data="./public/icons/right-arrow.svg" className="cursor-point">
          </object>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <object data="./public/icons/left-arrow.svg" className="cursor-point">
          </object>
          上一步
        </button>
        <button className="next">
          確認下單
        </button>
      </section> */}
    </section>
  )
}