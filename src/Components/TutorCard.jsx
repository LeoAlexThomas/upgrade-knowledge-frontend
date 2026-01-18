import React from "react";
import Rating from "react-rating";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${tutor._id}`);
  };
  return (
    <section
      className="flex flex-col items-center gap-2 rounded-lg shadow-md p-4 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={tutor.profileImage}
        alt=""
        className="w-20 h-20 rounded-full object-cover"
      />
      <h3 className="font-Title text-xl font-semibold text-center ">
        {tutor.name}
      </h3>
      <p className="text-base text-neutral-400 text-center ">{tutor.email}</p>
      <div className="flex gap-1 mb-1 items-center justify-center">
        <Rating
          readonly
          initialRating={tutor.overallRatings}
          emptySymbol={
            <IoMdStarOutline className="mt-0.5 w-5 h-5 text-accent" />
          }
          fullSymbol={<IoMdStar className="mt-0.5 w-5 h-5 text-accent" />}
        />
        <p className="text-xs">
          {tutor.overallRatings}({tutor.totalRatings})
        </p>
      </div>
    </section>
  );
};

export default TutorCard;
