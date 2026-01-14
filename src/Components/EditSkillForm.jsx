import React from "react";
import InputField from "./FormComponents/InputField";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import useApi from "../Hooks/makeApiCalls";
import { currentUser } from "../Utils/common";
import { isEmpty } from "lodash";
import { IoMdClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { toast } from "react-toastify";

const EditSkillForm = ({ onClose }) => {
  const [typedSkill, setTypedSkill] = React.useState("");
  const [skills, setSkills] = React.useState(currentUser.skills);
  const { makeApiCall, isLoading } = useApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    currentUser.skills = skills; // Locally update bio for demo purposes
    onClose();
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    if (typedSkill.trim() === "" && typedSkill.length > 20) {
      toast.error("Please enter a valid skill (1-20 characters)");
      return;
    }
    if (skills.map((s) => s.toLowerCase()).includes(typedSkill.toLowerCase())) {
      toast.warning("Skill already added");
      return;
    }
    setSkills([...skills, typedSkill]);
    setTypedSkill("");
  };

  return (
    <form
      className="flex flex-col gap-4 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <InputField
        id="skills"
        type="text"
        title="Skill"
        isRequired={false}
        name="skill"
        value={typedSkill}
        onChange={setTypedSkill}
        placeholder="Enter your skill"
        rightIcon={<MdAdd className="w-6 h-6 text-white" />}
        onRightIconClicked={handleAddSkill}
      />
      {isEmpty(skills) ? null : (
        <div className="flex items-center flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              className="inline-flex items-center bg-secondary px-4 py-2 rounded-2xl font-bold gap-1 text-white"
              key={skill}
            >
              {skill}
              <IoMdClose
                className="cursor-pointer"
                onClick={() => handleRemoveSkill(skill)}
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex w-full items-center justify-end gap-2">
        <PrimaryButton
          buttonLabel="Update"
          type="submit"
          isDisabled={isLoading}
        />
        <SecondaryButton buttonLabel="Cancel" onClick={onClose} />
      </div>
    </form>
  );
};

export default EditSkillForm;
