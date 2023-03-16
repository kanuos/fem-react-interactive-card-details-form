import { ChangeEvent, FC, useId, useMemo, useState } from "react";
import { InputType } from "./_";

export const Input: FC<InputType> = ({
  label,
  value,
  changeCallback,
  placeholder,
  cls,
  name,
  error,
}) => {
  const id = useId();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    changeCallback({
      key: name,
      value: e.target.value,
    });
  }

  const borderCls = useMemo<string>(() => {
    if (error) {
      return "border-error";
    }
    if (value || isFocused) {
      return `border-t-primary-1 border-l-primary-1 border-b-primary-2 border-r-primary-2`;
    }
    return `border-neutral-2`;
  }, [value, isFocused, error]);

  return (
    <div
      aria-label="input-group"
      className={`${cls} flex flex-col items-stretch w-full gap-y-1`}>
      <label
        htmlFor={id}
        className="uppercase text-sm font-medium tracking-wider text-neutral-4">
        {label}
      </label>
      <input
        id={id}
        name={name}
        aria-label={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border-2 transition-all ${borderCls} w-full font-medium text-neutral-4 placeholder:text-neutral-3 
        rounded-lg text-lg p-2.5 outline-none focus-visible:outline-none bg-[transparent] capitalize`}
      />
      <small className="font-medium text-error">{error}</small>
    </div>
  );
};
