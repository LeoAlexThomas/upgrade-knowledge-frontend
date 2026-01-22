import React, { Fragment, useEffect, useState } from "react";
import { allLessons, getFormattedDateTime, myFeedbacks } from "../Utils/common";
import { useParams } from "react-router-dom";
import FeedbackCard from "../Components/FeedbackCard";
import PrimaryButton from "../Components/PrimaryButton";
import { MdDateRange } from "react-icons/md";

const LessonIdPage = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  useEffect(() => {
    // Logic to fetch and display lesson details based on lesson ID
    setLesson(allLessons.find((lesson) => lesson.id === parseInt(id)));
  }, [id]);

  return (
    <div className="relative max-w-4xl mx-auto p-6">
      {lesson ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
          <img
            src={lesson.image}
            alt={lesson.title}
            className="w-full h-64 object-cover mb-4"
          />
          {/* Add more lesson details here */}
          {/* Description */}
          <h3 className="text-2xl font-semibold mb-2 max-w-32">Description</h3>
          <p className="text-lg mb-4  max-w-2/3">{lesson.description}</p>
          {/* Tutor */}
          <h3 className="text-2xl font-semibold mb-2">Tutor</h3>
          <p className="mb-1">{lesson.tutor.name}</p>
          <p className="text-sm text-neutral-500 mb-1">{lesson.tutor.email}</p>
          {/* Payment */}
          <div className="absolute top-1/3 right-10 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold my-2">Payment Details</h3>
            <p className="mb-1">Amount: ${lesson.payment.amount}</p>
            <p className="mb-1">
              Status: {lesson.payment.isPaid ? "Paid" : "Available"}
            </p>
            {lesson.payment.isPaid ? (
              <div className="w-full">
                <p className="mb-2">
                  Payment Date:{" "}
                  {getFormattedDateTime({
                    date: lesson.payment.paymentDate,
                    isDateOnly: true,
                  })}
                </p>
                <PrimaryButton
                  fullWidth={true}
                  buttonLabel="Join Lesson"
                  onClick={() => {}}
                />
              </div>
            ) : (
              <div>
                <PrimaryButton
                  fullWidth={true}
                  buttonLabel="BUY NOW"
                  onClick={() => {}}
                />
              </div>
            )}
          </div>
          {/* Session Details */}
          <h3 className="text-2xl font-semibold mt-6 mb-2">Session Details</h3>
          <div>
            <div className="flex items-center gap-1">
              <MdDateRange className="w-6 h-6 text-primary" />
              <p className="text-lg text-neutral-500 ">
                {getFormattedDate({
                  date: lesson.sessionStartDate,
                  isDateOnly: true,
                })}{" "}
                -{" "}
                {getFormattedDate({
                  date: lesson.sessionEndDate,
                  isDateOnly: true,
                })}
              </p>
            </div>
          </div>
          {/* Feedbacks */}
          <h3 className="text-2xl font-semibold mt-6 mb-2">Feedbacks</h3>
          <div className="py-2 px-1 flex flex-row gap-4 overflow-x-auto">
            {myFeedbacks.map((feedback) => (
              <Fragment key={feedback._id}>
                <FeedbackCard feedback={feedback} />
              </Fragment>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center mt-10">Loading lesson details...</p>
      )}
    </div>
  );
};

export default LessonIdPage;
