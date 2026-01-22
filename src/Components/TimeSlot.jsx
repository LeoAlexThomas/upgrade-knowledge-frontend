import { getFormattedTime } from "../Utils/common";

const TimeSlot = ({ slot }) => {
  const handleSlotSelection = () => {
    // Handle slot selection logic here
    console.log("Selected slot:", slot);
  };

  return (
    <div
      className="text-sm shrink-0 font-medium text-neutral-600 shadow-sm p-2 rounded-md hover:bg-neutral-100 cursor-pointer border"
      onClick={handleSlotSelection}
    >
      {getFormattedTime(slot)}
    </div>
  );
};

export default TimeSlot;
