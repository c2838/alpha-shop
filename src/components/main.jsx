import Register from "./Register.jsx"
import mainStyle from "../style/main.module.css"


export default function Main() {
  return (
    <div className={mainStyle.mainContainer}>
      <Register />
    </div>
  )
}