import { FC } from "react";
import type { BackCardProps } from "./_";

// images
import cardBg from "../../assets/bg-card-back.png";

// helpers
import { getPaddedDigits } from "../../utils/helpers";

export const BackCard: FC<BackCardProps> = ({ cvv }) => {
  return (
    <section
      aria-label="credit-card-back"
      className="relative w-96 h-auto aspect-video rounded-lg overflow-hidden">
      <img
        src={cardBg}
        aria-label="Credit Card Back side"
        alt=""
        className="pointer-events-none block w-full h-full object-cover"
      />
      <h2
        aria-label="cvv"
        className="absolute top-1/2 -translate-y-1/2 right-6 -translate-x-full font-medium text-xs text-neutral-1 tracking-widest">
        {getPaddedDigits(cvv, 3)}
      </h2>
    </section>
  );
};
