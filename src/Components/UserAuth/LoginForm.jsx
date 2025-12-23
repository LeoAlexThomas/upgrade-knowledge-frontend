import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputField from "../FormComponents/InputField";
import PrimaryButton from "../PrimaryButton";
import UserAuthTitle from "../UserAuthTitle";
import useApi from "../../Hooks/makeApiCalls";
import { toast } from "react-toastify";
import { setToken } from "../../Utils/common";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onRegisterClicked }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading: isLoginProcessing, makeApiCall } = useApi();

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await makeApiCall({
      url: "/auth/login",
      method: "POST",
      data: {
        email,
        password,
      },
    });

    if (!response) {
      return;
    }

    const token = response.data.token;
    if (!token) {
      console.log("User token not found");
      toast.error("Something went wrong, please try again later");
      return;
    }
    setToken(token);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-stretch justify-center p-4 h-full max-w-full sm:max-w-125 mx-auto">
      <UserAuthTitle>Login</UserAuthTitle>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
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
        <PrimaryButton
          buttonLabel="LOGIN"
          type="submit"
          fullWidth={true}
          isLoading={isLoginProcessing}
          isDisabled={isLoginProcessing}
        />
        <p>
          Don't have an account?{" "}
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={onRegisterClicked}
          >
            Register
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
