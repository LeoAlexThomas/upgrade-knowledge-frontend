import React from "react";

const ProfileSection = ({ title, children }) => {
  return (
    <section className="pt-2 pl-4 flex flex-col gap-2 ">
      <h4 className="px-1 font-Title text-2xl font-bold">{title}</h4>
      <div className="px-1 py-2 flex flex-row gap-4 overflow-x-auto">
        {children}
      </div>
    </section>
  );
};

export default ProfileSection;
