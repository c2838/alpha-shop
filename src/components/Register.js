import { createContext } from "react";

const checkoutInfo = {
  userName: '',
  cardNumber: '',
  cardDate: '',
  cardCvc: ''
}

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

export const CheckoutInfoContext = createContext(checkoutInfo)
export const CountiesContext = createContext(counties)