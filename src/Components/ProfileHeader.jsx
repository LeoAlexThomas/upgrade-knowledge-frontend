import isNil from "lodash/isNil";
import React from "react";
import { MdEdit } from "react-icons/md";

const ProfileHeader = ({ title, onEdit }) => {
  return (
    <div className="flex gap-2 justify-between">
      <h5 className="font-Title text-lg font-bold">{title}</h5>
      {!isNil(onEdit) && (
        <MdEdit
          className="w-5 h-5 text-primary cursor-pointer"
          onClick={onEdit}
        />
      )}
    </div>
  );
};

export default ProfileHeader;
