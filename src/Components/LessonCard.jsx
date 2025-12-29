import React from "react";

const LessonCard = ({ lesson }) => {
  return (
    <div>
      <h5>{lesson.title}</h5>
      <p>{lesson.description}</p>
      <div>
        <p>Session</p>
        <p>Start Date: {lesson.sessionStartDate}</p>
        <p>End Date: {lesson.sessionEndDate}</p>
      </div>
    </div>
  );
};

export default LessonCard;
