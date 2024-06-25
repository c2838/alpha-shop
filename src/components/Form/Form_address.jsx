import { useContext } from "react";
import { CountiesContext } from "../../context/ConstContext";
import addressStyle from "./formAddress.module.css";

// 渲染縣市option函式
function CountyOption() {
  // 輸入縣市資料
  const counties = useContext(CountiesContext);
  // 渲染縣市option
  const ConutyList = counties.map((item) => 
    <option key={item.value} value={item.value}>
      {item.county}
    </option>
  );

  return (
    <select className={addressStyle.countySelect} defaultValue="" required>
      <option value="" disabled>
        請選擇縣市
      </option>
      {ConutyList}
    </select>
  );
}

export default function FormAddress() {
  return (
    <form className={addressStyle.addFormContainer} data-phase="address">
      <h3 className={addressStyle.formTitle}>寄送地址</h3>
      <section className={addressStyle.formBody}>
        <div className={addressStyle.inputGroupSex}>
          <div className={addressStyle.inputLabel}>稱謂</div>
          <div className="select-container">
            <select className={addressStyle.sexSelect} defaultValue="mr">
              <option value="mr">先生</option>
              <option value="ms">女士</option>
              <option value="mx">不明</option>
            </select>
          </div>
        </div>
        <div className={addressStyle.inputGroupName}>
          <div className={addressStyle.inputLabel}>姓名</div>
          <input
            className={addressStyle.input}
            type="text"
            placeholder="請輸入姓名"
          />
        </div>
        <div className={addressStyle.inputGroupTel}>
          <div className={addressStyle.inputLabel}>電話</div>
          <input
            className={addressStyle.input}
            type="tel"
            placeholder="請輸入行動電話"
          />
        </div>
        <div className={addressStyle.inputGroupMail}>
          <div className={addressStyle.inputLabel}>Email</div>
          <input
            className={addressStyle.input}
            type="email"
            placeholder="請輸入電子郵件"
          />
        </div>
        <div className={addressStyle.inputGroupCounty}>
          <div className={addressStyle.inputLabel}>縣市</div>
          <div className="select-container">
            <CountyOption />
          </div>
        </div>
        <div className={addressStyle.inputGroupAdd}>
          <div className={addressStyle.inputLabel}>地址</div>
          <input
            className={addressStyle.input}
            type="text"
            placeholder="請輸入地址"
          />
        </div>
      </section>
    </form>
  );
}
