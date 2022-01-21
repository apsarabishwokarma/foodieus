import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "solid" | "outlined" | "bgcart";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "solid",
  children = "Start Now",
  className = "",
  ...props
}: ButtonProps) {
  const variantClasses = {
    solid: "bg-blue-500 hover:bg--400 blue text-white",
    outlined:
      "bg-transparent hover:bg-blue-400 text-white border border-blue-500",
    bgcart: "bg-blue-500 text-white hover:bg-blue-600 transition",
  };

  return (
    <button
      className={`max-w-max rounded-md py-3 px-10 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
