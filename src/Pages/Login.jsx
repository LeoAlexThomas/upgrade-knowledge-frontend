import React from "react";
import LoginForm from "../Components/UserAuth/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-screen">
      <div className="flex-1 h-full hidden sm:block">Login Image</div>
      <div className="flex-1 h-full ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
