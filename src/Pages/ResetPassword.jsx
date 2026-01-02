import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useApi from "../Hooks/makeApiCalls";
import Loading from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import UserAuthTitle from "../Components/UserAuthTitle";
import InputField from "../Components/FormComponents/InputField";
import PrimaryButton from "../Components/PrimaryButton";

const ResetPassword = () => {
  const [pinError, setPinError] = useState(null);
  const [searchParams] = useSearchParams();
  const { isLoading, makeApiCall } = useApi();

  useEffect(() => {
    // Checking the pin verification when user enters this page
    const token = searchParams.get("token");
    const pin = searchParams.get("pin");
    // Showing error message if any of the query params missed
    if (!token || !pin) {
      setPinError({
        response: {
          data: {
            message: "Link is corrupted, Please get new link for reset",
          },
        },
      });
      return;
    }
    // Checking the pin and it's validity
    makeApiCall({
      method: "POST",
      url: "/auth/verifyResetPin",
      data: { pin, token },
      onError: (error) => {
        setPinError(error);
      },
    });
  }, []);

  return (
    <div className="h-screen bg-back p-4">
      {/*  SHowing components based on verify api call response  */}
      {pinError !== null ? (
        <ErrorMessage
          message={pinError.response?.data?.message ?? "Something went wrong"}
          showFullScreen={true}
        />
      ) : isLoading ? (
        <Loading showFullScreen={true} />
      ) : (
        <ResetPasswordForm />
      )}
    </div>
  );
};

const ResetPasswordForm = () => {
  const { isLoading, makeApiCall } = useApi();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // To get values from url
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.warning(
          "Please enter same password on password field and confirm password field"
        );
        return;
      }
      const userToken = searchParams.get("token");

      makeApiCall({
        method: "PUT",
        url: "/auth/resetPassword",
        data: { password, token: userToken },
        onSuccess: (data) => {
          if (!data) {
            return;
          }
          toast.success(data.message);
          navigate("/login");
        },
      });
    } catch (error) {
      toast.error(error.response?.data?.message ?? "Something went wrong");
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-8 items-center justify-center  max-w-125 p-4 mx-auto"
      onSubmit={handleResetPassword}
    >
      <UserAuthTitle>RESET PASSWORD</UserAuthTitle>
      <InputField
        isRequired={true}
        name="password"
        placeholder="Enter your password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={setPassword}
        rightIcon={
          showPassword ? (
            <FaEyeSlash className="text-white h-6 w-6" />
          ) : (
            <FaEye className="text-white h-6 w-6" />
          )
        }
        onRightIconClicked={() => setShowPassword((prev) => !prev)}
      />
      <InputField
        isRequired={true}
        name="password"
        placeholder="Enter your confirm password"
        type="text"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      <PrimaryButton
        buttonLabel="RESET"
        type="submit"
        showBiggerButton={true}
        fullWidth={true}
        isDisabled={isLoading}
      />
    </form>
  );
};

export default ResetPassword;
