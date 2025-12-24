import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../Context/UserInfoContext";
import { getUserRoleLabel, removeToken } from "../Utils/common";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdPerson } from "react-icons/md";
import Loading from "./Loading";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useUserInfoContext();
  const handleLogoutClick = () => {
    removeToken();
    navigate("/login");
  };

  if (isLoading) return <Loading hideLabel={true} />;

  return (
    <Menu>
      <MenuButton className="w-full max-w-40">
        <div className="flex gap-2 items-center p-2 rounded-lg bg-neutral w-full">
          <MdPerson className="w-8 h-8" />
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold text-start">{user?.name}</p>
            <p className="text-sm text-secondary-hover font-bold">
              {getUserRoleLabel(user?.role)}
            </p>
          </div>
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="w-48 bg-neutral rounded-lg shadow-lg mt-1 origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
      >
        <MenuItem
          as="a"
          href="/profile"
          className="block px-2 py-1 hover:bg-neutral-300 text-base font-semibold"
        >
          MY PROFILE
        </MenuItem>
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
