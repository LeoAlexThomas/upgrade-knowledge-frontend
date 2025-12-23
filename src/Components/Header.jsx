import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken, removeToken, unAuthorizedPaths } from "../Utils/common";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleLogoutClick = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <header
      className={`w-full bg-neutral shadow-md ${
        unAuthorizedPaths.some((path) => path === location.pathname)
          ? "hidden"
          : ""
      }`}
    >
      <div className=" flex justify-between p-4 w-full max-w-360 mx-auto items-center">
        <Logo />
        {/* Checking is user login or not by trying to get token */}
        {getToken() === null ? (
          <PrimaryButton buttonLabel="LOGIN" onClick={handleLoginClick} />
        ) : (
          <div className="flex gap-4 items-center">
            <PrimaryButton
              buttonLabel="DASHBOARD"
              onClick={handleDashboardClick}
            />
            <div
              className="h-10 w-10 rounded-full bg-primary flex justify-center items-center hover:bg-primary-hover cursor-pointer"
              onClick={handleLogoutClick}
            >
              <AiOutlineLogout className="w-6 h-6 text-white" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
