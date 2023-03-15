import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BackCardProps } from "./_";
import { BackCard } from ".";
import { getPaddedDigits } from "../../utils/helpers";

afterEach(cleanup);

const propsList: BackCardProps[] = [
  {
    cvv: "",
  },
  {
    cvv: "1",
  },
  {
    cvv: "12",
  },
  {
    cvv: "123",
  },
  {
    cvv: "1234",
  },
  {
    cvv: "12345",
  },
  {
    cvv: "A",
  },
  {
    cvv: "AB",
  },
  {
    cvv: "ABC",
  },
  {
    cvv: "ABCD",
  },
  {
    cvv: "1B3",
  },
  {
    cvv: "A234",
  },
  {
    cvv: "1B34",
  },
  {
    cvv: "A23",
  },
];

describe("BackCard.tsx", () => {
  propsList.forEach(({ cvv }) => {
    it("should render the back card", () => {
      const { getByRole } = render(<BackCard cvv={cvv} />);
      const backCard = getByRole("region", { name: /credit-card-back/ });
      expect(backCard).toBeDefined();
    });
    it("should render the back card image", () => {
      const { getByRole } = render(<BackCard cvv={cvv} />);
      const bg = getByRole("img", { name: /credit card back side/i });
      expect(bg).toBeDefined();
      expect(bg.hasAttribute("src")).toBe(true);
      expect(bg.getAttribute("src")).toMatch(/bg-card-back.png/);
    });
    it("should render the cvv", () => {
      const { getByRole } = render(<BackCard cvv={cvv} />);
      const cvvEl = getByRole("heading", { level: 2, name: /cvv/i });
      expect(cvvEl).toBeDefined();
      expect(cvvEl.textContent).toMatch(getPaddedDigits(cvv, 3));
    });
  });
});
