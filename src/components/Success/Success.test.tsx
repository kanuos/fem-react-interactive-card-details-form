import { describe, it, expect, beforeEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Success } from ".";

beforeEach(cleanup);

describe("Success.tsx", () => {
  it("should render the component", () => {
    const { getByRole } = render(<Success />);

    const thankYouIcon = getByRole("img");
    expect(thankYouIcon).toBeDefined();
    expect(thankYouIcon.hasAttribute("src")).toBe(true);
    expect(thankYouIcon.getAttribute("src")).toMatch(/icon-complete/i);

    const heading = getByRole("heading", { level: 2, name: /thank you/i });
    expect(heading).toBeDefined();
    expect(heading.classList.contains("text-xl")).toBe(true);
    expect(heading.textContent).toMatch(/thank you!/i);

    const btn = getByRole("button", { name: /button-btn/i });
    expect(btn).toBeDefined();
  });
});
