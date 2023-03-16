import { FC, FormEvent } from "react";
import { Input } from "../Input";
import { FORM_FIELDS } from "../../utils/formFields";
import { FormProps } from "./_";
import { ChangePayloadType } from "../Input/_";
import { Button } from "../Button";

export const Form: FC<FormProps> = ({
  formData,
  updateForm,
  submitForm,
  formError,
}) => {
  // callback functions
  function handleChange({ key, value }: ChangePayloadType) {
    updateForm({ key, value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    submitForm();
  }

  return (
    <form
      aria-label="user-form"
      onSubmit={handleSubmit}
      className="grid grid-cols-4 w-full mt-8 lg:my-auto p-8 min-h-[50vh] h-auto gap-x-2 gap-y-4 max-w-md md:max-w-sm mx-auto">
      {FORM_FIELDS.map((el, i) => (
        <Input
          key={i}
          placeholder={el.placeholder}
          label={el.label}
          value={formData[el.name]}
          changeCallback={handleChange}
          cls={el.cls}
          name={el.name}
          error={formError[el.name]}
        />
      ))}
      <div className="col-span-full my-6">
        <Button type="submit" />
      </div>
    </form>
  );
};
