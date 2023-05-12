import { forwardRef } from "react";
import { InputHTMLAttributes, ForwardRefRenderFunction } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, ...rest }: InputProps,
  ref
) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="text-gray100 text-sm font-light mb-1">{label} *</label>
      <input
        className={`p-2 rounded-md border-[0.5px]  focus-visible:outline-none focus-visible:border-sky100 bg-transparent text-sm font-light text-gray100 ${
          error ? "border-red-500" : "border-gray100"
        }`}
        {...rest}
        ref={ref}
      />
      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
};

export default forwardRef<HTMLInputElement, InputProps>(Input);
