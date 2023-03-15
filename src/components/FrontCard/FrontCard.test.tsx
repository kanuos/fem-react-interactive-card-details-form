import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { FrontCardProps } from "./_";
import { FrontCard } from ".";
import { getFormattedCreditCard, getPaddedDigits } from "../../utils/helpers";

const propsList: FrontCardProps[] = [
  {
    cardHolder: "",
    cardNumber: "",
    month: "",
    year: "",
  },
  {
    cardHolder: "John Doe",
    cardNumber: "12345678",
    month: "12",
    year: "2026",
  },
  {
    cardHolder: "Jane Smith",
    cardNumber: "abcdefgh",
    month: "13",
    year: "2023",
  },
  {
    cardHolder: "3l0n mu5k",
    cardNumber: "abcdef1234567890",
    month: "",
    year: "2047",
  },
  {
    cardHolder: "zlatan ibrahimovic",
    cardNumber: "ibraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    month: "",
    year: "",
  },
  {
    cardHolder: "    kevin de bryune   ",
    cardNumber: "--",
    month: "",
    year: "3000",
  },
  {
    cardHolder: "lionel messi",
    cardNumber: "messssssiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    month: "",
    year: "",
  },
  {
    cardHolder: "thomas muller    ",
    cardNumber: "---- ----- ------",
    month: "",
    year: "",
  },
  {
    cardHolder: "cristiano ronaldo    ",
    cardNumber: "siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
    month: "",
    year: "",
  },
  {
    cardHolder: "hello world",
    cardNumber: "1234 4567 8975 1254",
    month: "12",
    year: "2025",
  },
];

afterEach(cleanup);

describe("FrontCard.tsx", () => {
  propsList.forEach((prop) => {
    it("should render the card UI", () => {
      const { getByRole } = renderComponent(prop);
      const cardUI = getByRole("region", { name: /credit-card-front/i });
      expect(cardUI).toBeDefined();
    });

    it("should display the logo", () => {
      const { getByRole } = renderComponent(prop);
      const logo = getByRole("img", { name: /logo/i });
      expect(logo).toBeDefined();
      expect(logo.hasAttribute("src")).toBe(true);
      expect(logo.getAttribute("src")).toMatch(/card-logo.svg/);
    });

    it("should display the background", () => {
      const { getByRole } = renderComponent(prop);
      const bg = getByRole("img", { name: /background/i });
      expect(bg).toBeDefined();
      expect(bg.hasAttribute("src")).toBe(true);
      expect(bg.getAttribute("src")).toMatch(/bg-card-front/i);
    });

    it("should display the card number", () => {
      const { getByRole } = renderComponent(prop);
      const cardNumber = getByRole("heading", {
        level: 1,
        name: /cardNumber/i,
      });
      expect(cardNumber).toBeDefined();
      expect(cardNumber.textContent).toMatch(
        getFormattedCreditCard(prop.cardNumber).join("")
      );
      const digitGroups = cardNumber.querySelectorAll("span");
      expect(digitGroups.length).toBe(4);
      digitGroups.forEach((group, i) => {
        expect(group.dataset["digitgroup"]).toBe(i + 1 + "");
      });
    });

    it("should display the card holder's name", () => {
      const { getByLabelText } = renderComponent(prop);
      const name = getByLabelText("cardHolder");
      expect(name).toBeDefined();
      expect(name.tagName).toMatch(/li/i);
      expect(name.textContent).toMatch(prop.cardHolder.trim());
    });

    it("should display the card expiry", () => {
      const { getByLabelText } = renderComponent(prop);
      const expiry = getByLabelText("cardExpiry");
      expect(expiry).toBeDefined();
      expect(expiry.tagName).toMatch(/li/i);
      expect(expiry.textContent).toBe(
        `${getPaddedDigits(prop.month)} / ${getPaddedDigits(prop.year)}`
      );
    });
  });
});

// testing utils
function renderComponent(prop: FrontCardProps) {
  return render(
    <FrontCard
      cardHolder={prop.cardHolder}
      month={prop.month}
      year={prop.year}
      cardNumber={prop.cardNumber}
    />
  );
}
