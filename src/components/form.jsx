import FormAddress from "./form_address";
import formStyle from "../style/form.module.css"

export default function Form() {
  return (
    <section className={formStyle.formContainer}>
      <FormAddress />
    </section>
  );
}