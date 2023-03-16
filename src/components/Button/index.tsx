import { FC } from "react";
import { ButtonProps } from "./_";

export const Button: FC<ButtonProps> = ({ type }) => {
  const label = type === "submit" ? "Confirm" : "Continue";

  return (
    <button
      type={type}
      className="w-full block py-3 bg-neutral-4 rounded-lg text-neutral-2 font-medium text-lg hover:-translate-y-0.5 hover:drop-shadow-lg hover:scale-105 transition-all"
      aria-label={`${type}-btn`}>
      {label}
    </button>
  );
};
