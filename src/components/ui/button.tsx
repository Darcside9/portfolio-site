"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded" {...props}>
      {children}
    </button>
  );
};

export default Button;
