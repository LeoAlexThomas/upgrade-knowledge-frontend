import ProfileSection from "../Components/ProfileSection.jsx";
import { useLocation, useParams } from "react-router-dom";
import { Fragment, useState } from "react";
import {
  getFormattedDateTime,
  getUserRoleLabel,
  myFeedbacks,
  myLessons,
  myPayments,
  myTutors,
  otherUser,
  tutorAvailabilitySlots,
} from "../Utils/common.js";
import LessonCard from "../Components/LessonCard.jsx";
import TutorCard from "../Components/TutorCard.jsx";
import PaymentInfoCard from "../Components/PaymentInfoCard.jsx";
import FeedbackCard from "../Components/FeedbackCard.jsx";
import Rating from "react-rating";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { isEmpty } from "lodash";
import TimeSlot from "../Components/TimeSlot.jsx";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import CustomModal from "../Components/Modals/CustomModal.jsx";
import SlotBooking from "../Components/SlotBooking.jsx";

const ProfileIdPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [selectAvailabilityDate, setSelectAvailabilityDate] = useState(
    new Date(),
  );
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isSlotBookingOpen, setIsSlotBookingOpen] = useState(false);

  const handleSlotBookingClose = () => {
    setIsSlotBookingOpen(false);
  };

  const handleSlotBookingOpen = () => {
    setIsSlotBookingOpen(true);
  };

  const handleSlotClicked = (slot) => {
    setSelectedSlot(slot);
    handleSlotBookingOpen();
  };

  return (
    <div className="w-full max-w-360 mx-auto px-4 py-2 my-6 gap-4 flex flex-col">
      <CustomModal
        isOpen={isSlotBookingOpen}
        onClose={handleSlotBookingClose}
        title="Book a Slot"
      >
        <SlotBooking
          slot={selectedSlot}
          tutor={otherUser}
          onClose={handleSlotBookingClose}
        />
      </CustomModal>
      {/* Basic info */}
      <div className="flex gap-4 justify-center items-center self-center max-w-2xl mb-4">
        <div className="relative w-32 h-32 rounded-full shadow-md ">
          <img
            src={otherUser.profileImage}
            alt={"user profile"}
            className="object-cover mb-2 absolute w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <h4 className="font-Title text-xl sm:text-3xl font-bold">
            {otherUser.name}
          </h4>
          <p className="text-base sm:text-lg font-semibold text-neutral">
            {otherUser.email}
          </p>
          <p className="text-base sm:text:lg font-medium text-neutral-600">
            {otherUser.bio}
          </p>
          <p className="font-Title text-lg font-bold text-secondary">
            {getUserRoleLabel(otherUser.role)}
          </p>
          {otherUser.role === "tutor" && (
            <p className="font-Title text-lg font-bold">
              ${otherUser.pricePerSession}{" "}
              <span className="font-medium">per session</span>
            </p>
          )}
          {otherUser.role === "tutor" && (
            <div className="flex gap-1 mb-1 items-center">
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
      </div>
      {/* Subjects */}
      {otherUser.role === "tutor" && (
        <ProfileSection title="Subjects" contentProps="flex-wrap">
          {isEmpty(otherUser.subjects) ? (
            <p className="text-center">Subjects are not available.</p>
          ) : (
            <p className="text-base font-medium text-neutral-600">
              {otherUser.subjects.join(", ")}
            </p>
          )}
        </ProfileSection>
      )}
      {otherUser.role === "tutor" && (
        <ProfileSection
          title="My Availability"
          subSection={
            <DatePicker
              value={selectAvailabilityDate}
              onChange={setSelectAvailabilityDate}
              customInput={
                <div className="flex justify-center gap-2 items-center border border-secondary-hover p-2 rounded-md cursor-pointer shadow-md w-36 bg-secondary hover:bg-secondary-hover text-white hover:shadow-lg ">
                  <FaCalendarAlt className="w-5 h-5" />
                  <p className="pt-0.5">
                    {getFormattedDateTime({
                      date: selectAvailabilityDate.toISOString(),
                      isDateOnly: true,
                    })}
                  </p>
                </div>
              }
            />
          }
        >
          {isEmpty(tutorAvailabilitySlots) ? (
            <div className="mx-auto">Slots are not available.</div>
          ) : (
            <div className="flex flex-wrap gap-4 justify-stretch">
              {tutorAvailabilitySlots.map((slot, index) => {
                return (
                  <Fragment key={index}>
                    <TimeSlot
                      slot={slot}
                      onSlotClicked={() => handleSlotClicked(slot)}
                    />
                  </Fragment>
                );
              })}
            </div>
          )}
        </ProfileSection>
      )}
      {otherUser.role === "student" && (
        <ProfileSection title="My Sessions" contentProps="flex-wrap">
          {myLessons.map((lesson) => {
            return (
              <Fragment key={lesson.id}>
                <LessonCard lesson={lesson} />
              </Fragment>
            );
          })}
        </ProfileSection>
      )}
      {otherUser.role === "student" && location.pathname === `/myProfile` && (
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

      {location.pathname === `/myProfile` && (
        <ProfileSection title="Payment History">
          {myPayments.map((payment) => {
            return (
              <Fragment key={payment._id}>
                <PaymentInfoCard payment={payment} />
              </Fragment>
            );
          })}
        </ProfileSection>
      )}
    </div>
  );
};

export default ProfileIdPage;
