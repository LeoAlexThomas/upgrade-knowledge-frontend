import React from "react";

const UserAuthTitle = ({ children }) => {
  return (
    <div className="font-Title text-3xl sm:text-5xl font-semibold text-center mb-4 sm:mb-8 text-primary">
      {children}
    </div>
  );
};

export default UserAuthTitle;
