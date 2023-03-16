import { render } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Form } from ".";
import { ValidatorType } from "../../utils/validator";

const mockUpdateFn = vi.fn();
const mockSubmitFn = vi.fn();

const dummyFormSchema: ValidatorType = {
  name: "",
  card: "",
  month: "",
  year: "",
  cvc: "",
};

const user = UserEvent.setup();

describe("Form.tsx", () => {
  it("should render the form", async () => {
    const { getByRole } = render(
      <Form
        formData={dummyFormSchema}
        formError={dummyFormSchema}
        updateForm={mockUpdateFn}
        submitForm={mockSubmitFn}
      />
    );

    const form = getByRole("form", { name: /user-form/i });
    expect(form).toBeDefined();
    expect(form.classList.contains("grid")).toBe(true);
    const nameField = getByRole("textbox", { name: "name" });
    const cardField = getByRole("textbox", { name: "card" });
    const cvcField = getByRole("textbox", { name: "cvc" });
    const yearField = getByRole("textbox", { name: "year" });
    const monthField = getByRole("textbox", { name: "month" });
    const submitButton = getByRole("button", { name: "submit-btn" });

    expect(nameField).toBeDefined();
    expect(cardField).toBeDefined();
    expect(cvcField).toBeDefined();
    expect(yearField).toBeDefined();
    expect(monthField).toBeDefined();
    expect(submitButton).toBeDefined();

    // form submission
    expect(mockSubmitFn).toHaveBeenCalledTimes(0);
    await user.click(submitButton);
    expect(mockSubmitFn).toHaveBeenCalledTimes(1);
    await user.click(submitButton);
    expect(mockSubmitFn).toHaveBeenCalledTimes(2);
  });
});
