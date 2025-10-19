import React from "react";
import type { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";
  const variants: Record<string, string> = {
    primary: "bg-black text-white hover:opacity-90",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:bg-gray-100",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
