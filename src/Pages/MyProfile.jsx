import ProfileSection from "../Components/ProfileSection.jsx";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import PrimaryButton from "../Components/PrimaryButton.jsx";
import {
  currentUser,
  getUserRoleLabel,
  myFeedbacks,
  myLessons,
  myPayments,
  myTutors,
} from "../Utils/common.js";
import LessonCard from "../Components/LessonCard.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import TutorCard from "../Components/TutorCard.jsx";
import PaymentInfoCard from "../Components/PaymentInfoCard.jsx";
import FeedbackCard from "../Components/FeedbackCard.jsx";
import CustomModal from "../Components/Modals/CustomModal.jsx";
import SecondaryButton from "../Components/SecondaryButton.jsx";
import EditProfileForm from "../Components/EditProfileForm.jsx";

const MyProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const { user } = useUserInfoContext();

  // if (!user) {
  //   toast.error("Something went wrong, please try login again");
  //   return <Navigate to="/login" />;
  // }

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleGetLesson = () => {
    navigate("/lessons");
  };

  const handleEditProfile = () => {
    handleModalOpen();
  };

  const handleEditBio = () => {};

  // const studentInfo = user.student;

  return (
    <div className="w-full max-w-360 mx-auto px-4 py-2 my-6 grid grid-cols-10 gap-4 ">
      <CustomModal
        isOpen={isOpen}
        onClose={handleModalClose}
        title="Edit Profile"
        actions={
          <>
            <PrimaryButton buttonLabel="Save" onClick={handleModalClose} />
            <SecondaryButton buttonLabel="Cancel" onClick={handleModalClose} />
          </>
        }
      >
        <EditProfileForm />
      </CustomModal>
      <div className="flex flex-col gap-4 col-span-2 ">
        <h2 className="font-Title text-2xl font-bold mt-2">Basic info</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 rounded-full shadow-md ">
            <img
              src={currentUser.profileImage}
              alt={"user profile"}
              className="object-cover mb-2 absolute w-full h-full rounded-full "
            />
            {/* <div className="absolute bottom-0 right-0 bg-white rounded-full shadow-md p-2">
              <MdEdit className="w-6 h-6 text-primary" />
            </div> */}
          </div>
          <h4 className="font-Title text-xl font-bold text-center">
            {currentUser.name}
          </h4>
          <p className="text-lg font-semibold text-neutral text-center">
            {currentUser.email}
          </p>
          <p className="text-lg font-semibold text-primary text-center mb-2">
            {getUserRoleLabel(currentUser.role)}
          </p>
          <PrimaryButton
            buttonLabel="Edit Profile"
            onClick={handleEditProfile}
          />
        </div>
        <div className="h-px w-full bg-neutral" />
        <div className="flex flex-col gap-4">
          <section>
            <ProfileHeader title="Bio" onEdit={handleEditBio} />
            <p className="text-sm font-medium text-neutral-600 ">
              {currentUser.bio}
            </p>
          </section>
          {currentUser.role === "tutor" && (
            <section>
              <ProfileHeader title="Skills" onEdit={handleEditBio} />
              <p className="text-sm font-medium text-neutral-600 ">
                HTML, CSS, JS, React, Node, MongoDB, Python
              </p>
            </section>
          )}
        </div>
      </div>
      <div className="col-span-8 w-full h-full flex flex-col gap-10 border-l border-neutral">
        <ProfileSection title="Lessons">
          {myLessons.map((lesson) => {
            return (
              <Fragment key={lesson.id}>
                <LessonCard lesson={lesson} />
              </Fragment>
            );
          })}
        </ProfileSection>
        {currentUser.role === "student" && (
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

        {currentUser.role === "tutor" && (
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

export default MyProfile;
