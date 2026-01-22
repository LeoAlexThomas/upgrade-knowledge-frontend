import isNil from "lodash/isNil";

const ProfileSection = ({ title, subSection, contentProps, children }) => {
  return (
    <section className="flex flex-col gap-2 mt-6">
      <div className="flex items-center gap-4">
        <h4 className="px-1 font-Title text-2xl font-bold w-full">{title}</h4>
        {isNil(subSection) ? null : <>{subSection}</>}
      </div>
      <div
        className={`px-1 py-2 flex flex-row gap-4 overflow-x-auto ${contentProps}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ProfileSection;
