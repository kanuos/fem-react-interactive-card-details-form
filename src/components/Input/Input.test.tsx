import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { Input } from ".";

const mockHandleChange = vi.fn();

beforeEach(cleanup);
const user = UserEvent.setup();

describe("Input.tsx", () => {
  it("should render the input", () => {
    const { input } = renderInput();
    expect(input).toBeDefined();
    expect(input.type).toMatch(/text/i);
    expect(input.placeholder).toMatch(/jane appleseed/i);
    expect(input.hasAttribute("id")).toBe(true);
  });

  it("should invoke the callback when user types", async () => {
    const { input } = renderInput();
    const typedText = "Hello world";
    await user.type(input, typedText);
    expect(mockHandleChange).toHaveBeenCalledTimes(typedText.length);
  });
});

function renderInput() {
  const utils = render(
    <Input
      value={""}
      changeCallback={mockHandleChange}
      placeholder={"e.g. Jane Appleseed"}
      name={"name"}
    />
  );
  const input = utils.getByRole("textbox", {
    name: /name/i,
  }) as HTMLInputElement;
  return { input, ...utils };
}
