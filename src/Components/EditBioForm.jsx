import React from "react";
import InputField from "./FormComponents/InputField";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import useApi from "../Hooks/makeApiCalls";
import { currentUser } from "../Utils/common";

const EditBioForm = ({ onClose }) => {
  const [bio, setBio] = React.useState("");
  const { makeApiCall, isLoading } = useApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    currentUser.bio = bio; // Locally update bio for demo purposes
    onClose();
  };

  return (
    <form
      className="flex flex-col gap-4 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <InputField
        id="bio"
        type="text"
        title="Bio"
        isRequired={false}
        name="bio"
        value={bio}
        onChange={setBio}
        placeholder="Enter your bio"
      />
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

export default EditBioForm;
