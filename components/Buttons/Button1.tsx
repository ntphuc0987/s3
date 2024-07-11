import React from "react";

interface ButtonsProps {
  children: React.ReactNode;
  className?: string;
}

export const Button1 = ({ children, className }: ButtonsProps) => {
  return (
    <button
      className={`${className} border-none text-white rounded-lg text-sm font-semibold py-3 px-5`}
      style={{
        background: "linear-gradient(90deg, #CE2D34 0%, #FF603B 35%)",
      }}
    >
      {children}
    </button>
  );
};
