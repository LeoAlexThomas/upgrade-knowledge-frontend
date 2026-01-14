import React from "react";
import { MdDateRange } from "react-icons/md";
import { getFormattedDate, getLessonStatus } from "../Utils/common";
import { useNavigate } from "react-router-dom";

const LessonCard = ({ lesson }) => {
  const navigate = useNavigate();
  const lessonStatus = getLessonStatus(
    lesson.sessionStartDate,
    lesson.sessionEndDate
  ); // lesson status

  const handleLessonClick = () => {
    navigate(`/lesson/${lesson.id}`);
  };

  return (
    <div
      className="relative shrink-0 w-xs rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={handleLessonClick}
    >
      <img src={lesson.image} alt="" className="object-cover w-full h-30 " />
      <h5 className="font-Title text-xl font-bold my-2 px-4">{lesson.title}</h5>
      <p className="text-base font-medium px-4 text-neutral-400 line-clamp-2 mb-1">
        {lesson.description}
      </p>
      <p className="text-sm font-medium px-4 line-clamp-2">
        Tutor: {lesson.tutor.name}
      </p>
      <div className="pt-2 pb-4 px-4">
        <div className="flex items-center gap-1">
          <MdDateRange className="w-5 h-5 text-primary" />
          <p className="text-sm text-neutral-500 ">
            {getFormattedDate(lesson.sessionStartDate)} -{" "}
            {getFormattedDate(lesson.sessionEndDate)}
          </p>
        </div>
      </div>
      <div
        className={`absolute top-4 -right-10 flex gap-1 items-center px-10 py-2 ${
          lessonStatus === "Completed" ? "bg-secondary" : "bg-primary"
        } text-white text-center text-sm font-bold rounded-tr-lg rounded-bl-lg rotate-45`}
      >
        <p>{lessonStatus}</p>
      </div>
    </div>
  );
};

export default LessonCard;
