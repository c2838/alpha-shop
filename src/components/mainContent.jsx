import Register from "./Register.jsx"
import Cart from "./cart.jsx"
import mainStyle from "../style/mainContent.module.css"


export default function Main() {
  return (
    <main>
      <div className={mainStyle.mainContainer}>
        <Register />
        <Cart />
      </div>
    </main>
  );
}