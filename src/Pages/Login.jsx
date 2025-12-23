import React from "react";
import LoginForm from "../Components/UserAuth/LoginForm";
import RegisterForm from "../Components/UserAuth/RegisterForm";

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleLoginClicked = (val) => {
    setIsLogin(val);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 h-full justify-end-safe sm:justify-center items-center relative">
      <img
        src="/images/background_1.jpg"
        alt="auth bg"
        className="absolute top-0 left-0 right-0 bottom-0 object-cover z-10 h-full w-full "
      />
      <div className="z-20 w-full max-w-full sm:max-w-lg backdrop-blur-sm bg-white/30 rounded-t-3xl sm:rounded-3xl p-0 sm:p-8 ">
        {isLogin ? (
          <LoginForm onRegisterClicked={() => handleLoginClicked(false)} />
        ) : (
          <RegisterForm onLoginClicked={() => handleLoginClicked(true)} />
        )}
      </div>
    </div>
  );
};

export default Login;
