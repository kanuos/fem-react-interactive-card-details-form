import { FC } from "react";
import type { FrontCardProps } from "./_";

// images
import background from "../../assets/bg-card-front.png";
import logo from "../../assets/card-logo.svg";

// helpers
import { getPaddedDigits, getFormattedCreditCard } from "../../utils/helpers";

export const FrontCard: FC<FrontCardProps> = ({
  cardNumber,
  month,
  year,
  cardHolder,
}) => {
  return (
    <section
      aria-label="credit-card-front"
      className="relative w-96 h-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
      <img
        src={logo}
        alt="Credit card logo"
        className="absolute top-6 left-6 pointer-events-none object-contain h-8"
      />
      <img
        src={background}
        aria-label="Credit Card Background"
        alt=""
        className="pointer-events-none block w-full h-full object-cover"
      />
      <article className="absolute inset-0 p-6 grid place-items-end outline-primary-1 outline-2">
        <div className="mt-auto h-fit font-medium text-neutral-1 w-full grid gap-4">
          <h1
            aria-label="cardNumber"
            className="text-xl flex items-center justify-start gap-x-6">
            {getFormattedCreditCard(cardNumber).map((el, i) => (
              <span key={i} className="tracking-wider" data-digitgroup={i + 1}>
                {el}
              </span>
            ))}
          </h1>
          <ul className="flex items-center justify-between">
            <li className="text-xs" aria-label="cardHolder">
              <small className="uppercase tracking-wider">
                {cardHolder.trim() || "Jane Appleseed"}
              </small>
            </li>
            <li className="text-xs" aria-label="cardExpiry">
              <small>
                {getPaddedDigits(month)} / {getPaddedDigits(year)}
              </small>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};
