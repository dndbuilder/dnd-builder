import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 py-2 bg-emerald-500 text-emerald-50 hover:bg-emerald-600">
      {children}
    </button>
  );
};
