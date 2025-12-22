import React from "react";
import RegisterForm from "../Components/UserAuth/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-screen">
      <div className="flex-1 h-full ">
        <RegisterForm />
      </div>
      <div className="flex-1 h-full hidden sm:block">Register Image</div>
    </div>
  );
};

export default Register;
