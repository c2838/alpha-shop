import { useContext } from "react";
import { CheckoutInfoContext } from "../../context/RegisterContext";
// 匯入不同部分表單
import FormAddress from "./Form_address";
import FormShipping from "./Form_shipping";
import FormCheckout from "./Form_checkout";
import formStyle from "./form.module.css";

export default function Form() {
  // 判斷狀態用函式
  function statusJudge(status) {
    if (status === "address") {
      return FormAddress;
    } else if (status === "shipping") {
      return FormShipping;
    } else {
      return FormCheckout;
    }
  }

  const { status } = useContext(CheckoutInfoContext);
  const Form = statusJudge(status);

  return (
    <section className={formStyle.formContainer}>
      <Form />
    </section>
  );
}
