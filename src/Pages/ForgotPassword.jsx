import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useApi from "../Hooks/makeApiCalls";
import InputField from "../Components/FormComponents/InputField";
import PrimaryButton from "../Components/PrimaryButton";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");

  const { isLoading, makeApiCall } = useApi();

  useEffect(() => {
    const mail = searchParams.get("email");
    if (!mail) {
      return;
    }
    setEmail(mail);
  }, [searchParams]);

  const handleGetResetLink = async (e) => {
    e.preventDefault();
    const response = await makeApiCall({
      method: "POST",
      url: "/auth/getResetLink",
      data: { email },
    });
    // Check for the response is null, If null there is error it'll be handle in 'makeApiCall' method itself
    if (!response) {
      return;
    }
    // Showing Success toast message
    toast.success(response.message);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 h-full justify-end-safe sm:justify-center items-center relative">
      <img
        src="/images/background_1.jpg"
        alt="auth bg"
        className="absolute top-0 left-0 right-0 bottom-0 object-cover z-10 h-full w-full "
      />
      <form
        className="z-20 w-full max-w-full sm:max-w-lg backdrop-blur-sm bg-white/30 rounded-t-3xl sm:rounded-3xl p-0 sm:p-8 flex flex-col gap-8"
        onSubmit={handleGetResetLink}
      >
        <div>
          <h3 className="font-Title text-3xl sm:text-4xl font-semibold text-center mb-1 text-primary">
            FORGOT PASSWORD
          </h3>
          <p className="text-sm sm:text-base text-center mt-2">
            Please enter mail id to send reset password link
          </p>
        </div>
        <InputField
          isRequired={true}
          name="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={setEmail}
          title="Email"
        />

        <PrimaryButton
          buttonLabel="GET RESET LINK"
          type="submit"
          fullWidth={true}
          isLoading={isLoading}
          isDisabled={isLoading}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
