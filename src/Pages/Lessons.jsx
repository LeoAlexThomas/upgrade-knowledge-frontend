import React, { Fragment } from "react";
import { allLessons } from "../Utils/common";
import LessonCard from "../Components/LessonCard";

const Lessons = () => {
  return (
    <div className="w-full max-w-360 mx-auto px-4 py-2 my-8 ">
      <h2 className="font-Title text-2xl font-bold mt-2 mb-8">All Lessons</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {allLessons.map((lesson) => (
          <Fragment key={lesson.id}>
            <LessonCard lesson={lesson} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
