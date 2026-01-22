import { getFormattedDateTime } from "../Utils/common";

const TimeSlot = ({ slot, onSlotClicked }) => {
  return (
    <div
      className="text-sm shrink-0 font-medium text-neutral-600 shadow-sm p-2 rounded-md hover:bg-neutral-100 cursor-pointer border"
      onClick={onSlotClicked}
    >
      {getFormattedDateTime({ date: slot, isTimeOnly: true })}
    </div>
  );
};

export default TimeSlot;
