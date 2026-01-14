import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div
      className="flex gap-4 items-center cursor-pointer"
      onClick={handleLogoClick}
    >
      <img
        src="/images/logo.jpg"
        alt="logo"
        className="w-12 h-12 rounded-full"
      />
      <h4 className="font-Title text-2xl font-semibold text-white">Up-Know</h4>
    </div>
  );
};

export default Logo;
