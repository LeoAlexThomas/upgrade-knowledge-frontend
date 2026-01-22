import React, { useState } from "react";
import { getFormattedDateTime } from "../Utils/common";
import { MultiSelect } from "react-multi-select-component";
import { Select } from "@headlessui/react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const SlotBooking = ({ slot, tutor, onClose }) => {
  const [subject, setSubject] = useState(null);

  return (
    <div className="flex flex-col gap-6">
      {/* Tutor Info */}
      <div>
        <h3 className="font-Title font-bold text-xl mb-2">Tutor info</h3>
        <div className="flex gap-4 items-center">
          <img
            src={tutor.profileImage}
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-medium">{tutor.name}</p>
            <p className="text-base text-neutral-500">{tutor.email}</p>
          </div>
        </div>
      </div>

      {/* Subjects For session */}
      <div>
        <h3 className="font-Title font-bold text-xl mb-2">Subjects</h3>
        <div className="relative">
          <Select
            value={subject ?? 0}
            onChange={(e) => setSubject(e.target.value)}
            label="Subject"
            placeholder="Select Subject"
            className="w-full border rounded-md border-gray-300 bg-white appearance-none p-2 pr-12 "
          >
            <option value={""}>Select Subject</option>
            {tutor.subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Select>
          <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div>
        <h3 className="font-Title font-bold text-xl mb-2">Slot</h3>
        <p className="text-base">{getFormattedDateTime({ date: slot })}</p>
      </div>
      <div>
        <h3 className="font-Title font-bold text-xl mb-2">Price</h3>
        <p className="text-lg font-medium text-primary">
          ${tutor.pricePerSession}
        </p>
      </div>
      <div className="flex gap-2">
        <SecondaryButton
          buttonLabel="Cancel"
          fullWidth={true}
          onClick={onClose}
        />
        <PrimaryButton buttonLabel="Book a Slot" fullWidth={true} />
      </div>
    </div>
  );
};

export default SlotBooking;
