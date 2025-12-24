import { createContext, useContext, useEffect, useState } from "react";
import useFetchApiCall from "../Hooks/fetchApiCall";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const { item, isLoading, error, mutate } = useFetchApiCall({
    url: "/user/current",
  });

  // const handleLoginClick = () => {
  //   navigate("/login");
  // };

  // if (error) {
  //   const message = error.response?.data?.message;
  //   return (
  //     <div className="flex flex-col gap-4 justify-center items-center h-full">
  //       <ErrorMessage message={message ?? "Unable get loggedIn user info"} />
  //       {message.includes("expired") && (
  //         <PrimaryButton
  //           buttonLabel="GO TO LOGIN PAGE"
  //           onClick={handleLoginClick}
  //         />
  //       )}
  //     </div>
  //   );
  // }

  // if (loading) {
  //   return <Loading showFullScreen={true} />;
  // }

  // if (!item) {
  //   return (
  //     <ErrorMessage
  //       message={"Unable get loggedIn user info"}
  //       showFullScreen={true}
  //     />
  //   );
  // }

  return (
    <UserInfoContext.Provider
      value={{ user: item?.data || null, isLoading, mutate, error }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfoContext = () => useContext(UserInfoContext);
