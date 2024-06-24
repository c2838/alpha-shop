// 匯入不同部分表單
import FormAddress from "./form_address";
import FormShipping from "./form_shipping"
import FormCheckout from "./form_checkout"
import formStyle from "../style/form.module.css"



export default function Form({ status }) {
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
  const Form = statusJudge(status);

  return (
    <section className={formStyle.formContainer}>
      <Form />
    </section>
  );
}