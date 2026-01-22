import React from "react";
import Rating from "react-rating";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="flex flex-col gap-1 items-start max-w-sm rounded-lg shadow-md p-4 shrink-0">
      <p className="text-sm text-neutral-600 font-bold">{feedback.content}</p>
      <p className="text-base font-semibold">{feedback.lessonTitle}</p>
      <div className="flex gap-1 mb-1 items-center justify-center justify-self-end-safe">
        <Rating
          readonly
          initialRating={feedback.ratings}
          emptySymbol={
            <IoMdStarOutline className="mt-0.5 w-5 h-5 text-accent" />
          }
          fullSymbol={<IoMdStar className="mt-0.5 w-5 h-5 text-accent" />}
        />
        <p className="text-xs">({feedback.ratings})</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
