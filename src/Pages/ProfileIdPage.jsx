import ProfileSection from "../Components/ProfileSection.jsx";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import {
  getUserRoleLabel,
  myFeedbacks,
  myLessons,
  myPayments,
  myTutors,
  otherUser,
} from "../Utils/common.js";
import LessonCard from "../Components/LessonCard.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import TutorCard from "../Components/TutorCard.jsx";
import PaymentInfoCard from "../Components/PaymentInfoCard.jsx";
import FeedbackCard from "../Components/FeedbackCard.jsx";
import Rating from "react-rating";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const ProfileIdPage = () => {
  const { id } = useParams();

  console.log("ProfileIdPage id:", id);

  return (
    <div className="w-full max-w-360 mx-auto px-4 py-2 my-6 grid grid-cols-10 gap-4 ">
      <div className="flex flex-col gap-4 col-span-2 ">
        <h2 className="font-Title text-2xl font-bold mt-2">Basic info</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 rounded-full shadow-md ">
            <img
              src={otherUser.profileImage}
              alt={"user profile"}
              className="object-cover mb-2 absolute w-full h-full rounded-full "
            />
          </div>
          <h4 className="font-Title text-xl font-bold text-center">
            {otherUser.name}
          </h4>
          <p className="text-lg font-semibold text-neutral text-center">
            {otherUser.email}
          </p>
          <p className="text-lg font-semibold text-primary text-center mb-2">
            {getUserRoleLabel(otherUser.role)}
          </p>
          {otherUser.role === "tutor" && (
            <div className="flex gap-1 mb-1 items-center justify-center">
              <Rating
                readonly
                initialRating={otherUser.overallRatings}
                emptySymbol={
                  <IoMdStarOutline className="mt-0.5 w-5 h-5 text-accent" />
                }
                fullSymbol={<IoMdStar className="mt-0.5 w-5 h-5 text-accent" />}
              />
              <p className="text-xs">
                {otherUser.overallRatings}({otherUser.totalRatings})
              </p>
            </div>
          )}
        </div>
        <div className="h-px w-full bg-neutral" />
        <div className="flex flex-col gap-4">
          <section>
            <ProfileHeader title="Bio" />
            <p className="text-sm font-medium text-neutral-600 ">
              {otherUser.bio}
            </p>
          </section>
          {otherUser.role === "tutor" && (
            <section>
              <ProfileHeader title="Skills" />
              <p className="text-sm font-medium text-neutral-600 ">
                {otherUser.skills.join(", ")}
              </p>
            </section>
          )}
        </div>
      </div>
      <div className="col-span-8 w-full h-full flex flex-col gap-10 border-l border-neutral">
        <ProfileSection title="My Lessons">
          {myLessons.map((lesson) => {
            return (
              <Fragment key={lesson.id}>
                <LessonCard lesson={lesson} />
              </Fragment>
            );
          })}
        </ProfileSection>
        {otherUser.role === "student" && (
          <ProfileSection title="Tutors">
            {myTutors.map((tutor) => {
              return (
                <Fragment key={tutor._id}>
                  <TutorCard tutor={tutor} />
                </Fragment>
              );
            })}
          </ProfileSection>
        )}

        {otherUser.role === "tutor" && (
          <ProfileSection title="Feedbacks">
            {myFeedbacks.map((feedback) => {
              return (
                <Fragment key={feedback._id}>
                  <FeedbackCard feedback={feedback} />
                </Fragment>
              );
            })}
          </ProfileSection>
        )}

        <ProfileSection title="Payment History">
          {myPayments.map((payment) => {
            return (
              <Fragment key={payment._id}>
                <PaymentInfoCard payment={payment} />
              </Fragment>
            );
          })}
        </ProfileSection>
      </div>
    </div>
  );
};

export default ProfileIdPage;
