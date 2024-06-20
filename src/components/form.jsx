import FormAddress from "./form_address";
import FormShipping from "./form_shipping"
import FormCheckout from "./form_checkout"
import formStyle from "../style/form.module.css"

function statusJudge(status) {
  if (status === 'address') {
    return FormAddress
  } else if (status === 'shipping') {
    return FormShipping
  } else {
    return FormCheckout
  }
}

export default function Form({ status }) {
  
  const Form = statusJudge(status)
  return (
    <section className={formStyle.formContainer}>
      <Form />
    </section>
  );
}