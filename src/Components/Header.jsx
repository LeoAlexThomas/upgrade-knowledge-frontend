import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken, unAuthorizedPaths } from "../Utils/common";
import UserProfile from "./UserProfile";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header
      className={`w-full h-20 bg-primary shadow-md ${
        unAuthorizedPaths.some((path) => path === location.pathname)
          ? "hidden"
          : ""
      }`}
    >
      <div className=" flex justify-between w-full px-4 py-2  max-w-360 mx-auto items-center">
        <div className="grow">
          <Logo />
        </div>
        {/* Checking is user login or not by trying to get token */}
        {getToken() === null ? (
          <PrimaryButton buttonLabel="LOGIN" onClick={handleLoginClick} />
        ) : (
          <div className="flex gap-4 items-center justify-end-safe w-fit sm:w-62.5 ">
            <UserProfile />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
