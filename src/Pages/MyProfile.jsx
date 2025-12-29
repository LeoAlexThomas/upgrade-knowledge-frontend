import { useUserInfoContext } from "../Context/UserInfoContext";
import EmptyMessage from "../Components/EmptyMessage.jsx";
import { isEmpty } from "lodash";
import ProfileSection from "../Components/ProfileSection.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Fragment } from "react";
import PrimaryButton from "../Components/PrimaryButton.jsx";

const MyProfile = () => {
  const navigate = useNavigate();
  const { user } = useUserInfoContext();

  if (!user) {
    toast.error("Something went wrong, please try login again");
    return <Navigate to="/login" />;
  }

  const handleGetLesson = () => {
    navigate("/lessons");
  };

  return (
    <div className="max-w-360 h-full mx-auto px-4 py-2 flex gap-2 items-stretch">
      <div className="flex flex-col gap-4 w-full max-w-80 ">
        <h2 className="font-Title text-3xl font-bold">Basic info</h2>
        <div>
          <h4 className="font-Title text-xl font-bold">{user.name}</h4>
          <p className="text-lg font-semibold text-neutral">{user.email}</p>
        </div>
      </div>
      <div className="w-0.5 h-full bg-neutral" />
      <div className="flex flex-col gap-4 w-full">
        <ProfileSection title="Lessons">
          {isEmpty(user.lessons) ? (
            <div className="w-full flex gap-4 flex-col justify-center items-center ">
              <p className="text-xl font-semibold">Buy new lessons</p>
              <PrimaryButton
                buttonLabel="Get Lessons"
                onClick={handleGetLesson}
              />
            </div>
          ) : (
            user.lessons.map((lesson) => {
              return (
                <Fragment key={lesson._id}>
                  <LessonCard lesson={lesson} />
                </Fragment>
              );
            })
          )}
        </ProfileSection>
        <ProfileSection title="Lessons">
          {isEmpty(user.lessons) ? (
            <p>No Lessons</p>
          ) : (
            user.lessons.map((lesson) => <p>{lesson}</p>)
          )}
        </ProfileSection>
      </div>
    </div>
  );
};

export default MyProfile;
