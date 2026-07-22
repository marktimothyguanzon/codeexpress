import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "bg-emerald-500 text-white hover:bg-emerald-600":
            variant === "secondary",

          "border border-blue-600 text-blue-600 hover:bg-blue-50":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}