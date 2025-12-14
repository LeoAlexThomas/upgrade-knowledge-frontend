import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src="/images/logo.jpg"
        alt="logo"
        className="w-12 h-12 rounded-full"
      />
      <h4 className="font-Title text-2xl font-semibold">KnowUp</h4>
    </div>
  );
};

export default Logo;
