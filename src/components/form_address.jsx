import { useState } from 'react'
import addressStyle from '../style/formAddress.module.css'

// 縣市option陣列
const counties = [
  { value: "KLU", county: "基隆市" },
  { value: "TPH", county: "新北市" },
  { value: "TPE", county: "台北市" },
  { value: "TYC", county: "桃園市" },
  { value: "HSH", county: "新竹縣" },
  { value: "HSC", county: "新竹市" },
  { value: "MAC", county: "苗栗縣" },
  { value: "MAL", county: "苗栗市" },
  { value: "TXG", county: "臺中市" },
  { value: "CWH", county: "彰化縣" },
  { value: "CWS", county: "彰化市" },
  { value: "NTC", county: "南投市" },
  { value: "NTO", county: "南投縣" },
  { value: "CHY", county: "嘉義縣" },
  { value: "CYI", county: "嘉義市" },
  { value: "TNN", county: "臺南市" },
  { value: "KHH", county: "高雄市" },
  { value: "IUS", county: "屏東縣" },
  { value: "PTS", county: "屏東市" },
  { value: "ILN", county: "宜蘭縣" },
  { value: "ILC", county: "宜蘭市" },
  { value: "HWA", county: "花蓮縣" },
  { value: "HWC", county: "花蓮市" },
  { value: "TTC", county: "台東市" },
  { value: "TTT", county: "台東縣" },
  { value: "PEH", county: "澎湖縣" },
  { value: "KMN", county: "金門縣" },
  { value: "LNN", county: "連江縣" },
];

// 渲染縣市option函式
function CountyOption({ counties }) {
  const ConutyList = counties.map(item => {
    return (
      <option key={item.value} value={item.value}>{item.county}</option>
    )
  })
  return (
    <select className={addressStyle.countySelect} required>
      <option value="" disabled selected>請選擇縣市</option>
      {ConutyList}
    </select>
  );
}


export default function FormAddress() {
  const [countyList, setCountyList] = useState(counties)

  return (
    <form className={addressStyle.addFormContainer} data-phase="address">
      <h3 className={addressStyle.formTitle}>寄送地址</h3>
      <section className={addressStyle.formBody}>
        <div className={addressStyle.inputGroupSex}>
          <div className={addressStyle.inputLabel}>稱謂</div>
          <div className="select-container">
            <select className={addressStyle.sexSelect}>
              <option value="mr" selected>
                先生
              </option>
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
            <CountyOption counties={countyList} />
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