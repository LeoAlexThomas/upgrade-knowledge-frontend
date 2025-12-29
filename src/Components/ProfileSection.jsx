import React from "react";

const ProfileSection = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h4 className="font-Title text-2xl font-semibold">{title}</h4>
      <div className="flex gap-4 w-full">{children}</div>
    </div>
  );
};

export default ProfileSection;
