import { FC, useState, useEffect } from "react";
import { Form } from "./components/Form";
import { ChangePayloadType } from "./components/Input/_";
import { PageLayout } from "./components/Layout";
import { Success } from "./components/Success";
import { getSpacedDigitCreditCard } from "./utils/helpers";
import { validator, ValidatorType } from "./utils/validator";

const App: FC = () => {
  // state
  const [form, setForm] = useState<ValidatorType>(getFormSchema());
  const [formError, setFormError] = useState<ValidatorType>(getFormSchema());
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // lifecycle hooks
  useEffect(() => {
    const hasError = Object.values(formError).some(
      (el) => el.trim().length > 0
    );
    // there's no error - first time render/ no error
    if (!hasError) return;

    // remove the error messages after 5seconds
    const t = setTimeout(resetErrors, 5000);

    return () => clearTimeout(t);
  }, [formError]);

  // callbacks & behaviors

  // reset the formErrors
  function resetErrors() {
    setFormError(() => getFormSchema());
  }

  // get a ValidatorType empty schema
  function getFormSchema(): ValidatorType {
    return {
      name: "",
      card: "",
      cvc: "",
      month: "",
      year: "",
    };
  }

  // update the form everytime the user inputs on any of the field
  function updateForm({ key, value }: ChangePayloadType) {
    let temp = value;
    if (key === "card") {
      temp = getSpacedDigitCreditCard(value);
    }
    setForm((prev) => ({ ...prev, [key]: temp }));
  }

  // form submission callback
  function submitForm() {
    resetErrors();
    const validationReport = validator.safeParse(form);

    console.log({ form });
    // validation failed
    // safeParse doesn't throw errors so we can work with the field errors in the try block
    if (!validationReport.success) {
      const errors = validationReport.error.formErrors.fieldErrors;

      Object.entries(errors).forEach(([key, errorMSgArr]) => {
        setFormError((prev) => ({ ...prev, [key]: errorMSgArr[0] }));
      });
      return;
    }

    // validation successful
    setIsSubmitted(true);
  }

  return (
    <div className="grid place-items-center w-full h-full min-h-screen md:min-h-full md:h-screen bg-neutral-2">
      <PageLayout
        headerProps={{
          back: {
            cvv: form.cvc,
          },
          front: {
            cardNumber: form.card,
            year: form.year,
            month: form.month,
            cardHolder: form.name,
          },
        }}>
        {isSubmitted ? (
          <Success />
        ) : (
          <Form
            formData={form}
            formError={formError}
            updateForm={updateForm}
            submitForm={submitForm}
          />
        )}
      </PageLayout>
    </div>
  );
};

export default App;
