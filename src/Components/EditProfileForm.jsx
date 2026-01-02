import React, { useState } from "react";
import InputField from "./FormComponents/InputField";
import { currentUser } from "../Utils/common";
import { MdModeEdit } from "react-icons/md";
import useApi from "../Hooks/makeApiCalls";

const EditProfileForm = () => {
  const [name, setName] = useState(currentUser.name);
  const [profileImage, setProfileImage] = useState(currentUser.profileImage);

  const { makeApiCall, isLoading } = useApi();

  const handleChangeProfile = async () => {
    if (isLoading) return;
    const fileInput = document.getElementById("profileImage");
    fileInput.click();
    fileInput.onchange = () => {
      const file = fileInput.files[0];

      const formData = new FormData();
      formData.append("file", file);

      makeApiCall({
        url: `/user/updateProfileImage`,
        method: "PUT",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onSuccess: (data) => {
          setProfileImage(data.uploadedUrl);
        },
      });
    };
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="relative w-40 h-40 overflow-hidden">
        <img
          src={profileImage}
          alt=""
          className="absolute w-40 h-40 object-cover rounded-full z-0"
        />
        <div
          className="flex justify-center items-center absolute bg-primary p-2 rounded-full bottom-1 right-1 cursor-pointer z-10"
          onClick={handleChangeProfile}
        >
          <input
            type="file"
            accept="image/*"
            name="profileImage"
            id="profileImage"
            className="hidden"
          />
          <MdModeEdit className=" w-6 h-6 text-white" />
        </div>
      </div>
      <InputField
        id="name"
        type="text"
        title="Name"
        name="name"
        value={name}
        onChange={setName}
        isRequired={true}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default EditProfileForm;
