import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "solid" | "outlined";
  // children:ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "solid",
  children = "Start Now",
  className,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={`max-w-max rounded-md py-3 px-10  ${
          variant === "solid"
            ? "bg-blue-500 hover:bg--400 blue text-white"
            : "bg-transparent hover:bg-blue-400 text-white border border-blue-500 "
        } ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
``;
