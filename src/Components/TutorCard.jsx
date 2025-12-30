import React from "react";
import Rating from "react-rating";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const TutorCard = ({ tutor }) => {
  return (
    <section className="flex flex-col items-center gap-2 rounded-lg shadow-md p-4 cursor-pointer">
      <img
        src={tutor.profileImage}
        alt=""
        className="w-20 h-20 rounded-full object-cover"
      />
      <h3 className="font-Title text-xl font-semibold text-center ">
        {tutor.name}
      </h3>
      <p className="text-base text-neutral-400 text-center ">{tutor.email}</p>
      <Rating
        readonly
        initialRating={tutor.ratings}
        emptySymbol={<IoMdStarOutline className="w-5 h-5 text-accent" />}
        fullSymbol={<IoMdStar className="w-5 h-5 text-accent" />}
      />
    </section>
  );
};

export default TutorCard;
