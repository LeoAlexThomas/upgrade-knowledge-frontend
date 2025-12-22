import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken, unAuthorizedPaths } from "../Utils/common";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleDashboardClick = () => {
    navigate("/dashboard");
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
          <PrimaryButton
            buttonLabel="DASHBOARD"
            onClick={handleDashboardClick}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
