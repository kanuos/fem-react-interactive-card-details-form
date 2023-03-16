import thankYouIcon from "../../assets/icon-complete.svg";
import { Button } from "../Button";

export const Success = () => {
  return (
    <section className="flex flex-col items-center mx-auto justify-center font-medium text-center md:p-4 mt-10 lg:my-auto min-h-[50vh] h-auto w-full max-w-sm gap-8">
      <img
        src={thankYouIcon}
        alt="Success icon"
        className="block aspect-square h-20 w-20 object-cover"
      />
      <div className="flex flex-col w-full items-center justify-center gap-3">
        <h2 className="text-xl tracking-wider uppercase text-neutral-4">
          thank you!
        </h2>
        <p className="text-xs capitalize text-neutral-3">
          we've added your card details.
        </p>
      </div>
      <Button type="button" />
    </section>
  );
};
