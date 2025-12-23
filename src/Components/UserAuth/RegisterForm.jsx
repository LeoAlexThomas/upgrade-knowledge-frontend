import React, { useState } from "react";
import useApi from "../../Hooks/makeApiCalls";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserAuthTitle from "../UserAuthTitle";
import InputField from "../FormComponents/InputField";
import PrimaryButton from "../PrimaryButton";
import { toast } from "react-toastify";
import SelectField from "../FormComponents/SelectField";
import { getUserRoleLabel, userRoles } from "../../Utils/common";

const RegisterForm = ({ onLoginClicked }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading: isRegisterProcessing, makeApiCall } = useApi();

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await makeApiCall({
      url: "/auth/register",
      method: "POST",
      data: {
        name,
        email,
        password,
        role,
      },
    });

    if (!response) {
      return;
    }

    toast.success(
      response.response?.data?.message ?? "Registration successful"
    );
    onLoginClicked();
  };

  return (
    <div className="flex flex-col items-stretch justify-center p-4 h-full max-w-full sm:max-w-125 mx-auto">
      <UserAuthTitle>Register</UserAuthTitle>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <InputField
          isRequired={true}
          name="name"
          title="Name"
          type="text"
          placeholder="Enter your name"
          onChange={setName}
          value={name}
          id="name"
        />
        <InputField
          isRequired={true}
          name="email"
          title="Email"
          type="email"
          placeholder="Enter your email"
          onChange={setEmail}
          value={email}
          id="email"
        />
        <SelectField
          isRequired={true}
          name="role"
          title="Role"
          onChange={setRole}
          value={role}
          id="role"
          options={userRoles.map((role) => ({
            label: getUserRoleLabel(role),
            value: role,
          }))}
        />
        <InputField
          isRequired={true}
          name="password"
          title="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          onChange={setPassword}
          value={password}
          id="password"
          rightIcon={
            showPassword ? (
              <FaEyeSlash className="text-white h-6 w-6" />
            ) : (
              <FaEye className="text-white h-6 w-6" />
            )
          }
          onRightIconClicked={handleShowPassword}
        />
        <div className="w-full mt-4">
          <PrimaryButton
            buttonLabel="REGISTER"
            type="submit"
            fullWidth={true}
            isLoading={isRegisterProcessing}
            isDisabled={isRegisterProcessing}
          />
        </div>
        <p className="text-base text-center">
          Already have an account?{" "}
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={onLoginClicked}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
