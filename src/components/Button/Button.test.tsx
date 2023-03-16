import { describe, it, expect, beforeEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Button } from "./index";

beforeEach(cleanup);

describe("Button.tsx", () => {
  it("should render the submit button", () => {
    testBtn("submit", "confirm");
  });

  it("should render the continue button", () => {
    testBtn("button", "continue");
  });
});

// utils
function testBtn(type: "button" | "submit", label: string) {
  const { getByRole } = render(<Button type={type} />);
  const btn = getByRole("button");
  expect(btn).toBeDefined();
  expect(btn.textContent).toMatch(new RegExp(label, "i"));
  expect(btn.getAttribute("type")).toMatch(new RegExp(type, "i"));
  expect(btn.hasAttribute("disabled")).toBe(false);
}
