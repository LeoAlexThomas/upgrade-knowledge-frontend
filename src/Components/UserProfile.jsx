import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../Context/UserInfoContext";
import { getUserRoleLabel, removeToken } from "../Utils/common";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdPerson } from "react-icons/md";
import Loading from "./Loading";
import isNil from "lodash/isNil";

const UserProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useUserInfoContext();
  const handleLogoutClick = () => {
    removeToken();
    navigate("/login");
  };

  if (isLoading) return <Loading hideLabel={true} />;

  return (
    <Menu>
      <MenuButton className="w-full">
        <div className="flex gap-3 items-center p-2 rounded-lg bg-neutral w-full">
          <div className="w-12 h-12 rounded-full bg-secondary">
            {isNil(user.profileImage) ? (
              <MdPerson className="w-full h-full p-2" />
            ) : (
              <img
                src={user.profileImage}
                alt="profile"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-Title text-xl font-bold text-start line-clamp-1">
              {user?.name}
            </p>
            <p className="text-sm text-secondary-hover font-bold text-start">
              {getUserRoleLabel(user?.role)}
            </p>
          </div>
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="w-62.5 bg-neutral rounded-lg shadow-lg mt-1 origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
      >
        {!location.pathname.includes("/myProfile") && (
          <MenuItem
            as="a"
            href="/myProfile"
            className="block px-2 py-1 hover:bg-neutral-300 text-base font-semibold"
          >
            MY PROFILE
          </MenuItem>
        )}
        <MenuItem
          as="button"
          onClick={handleLogoutClick}
          className="block px-2 py-1 w-full hover:bg-neutral-300 text-base font-semibold text-start cursor-pointer"
        >
          LOGOUT
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default UserProfile;
