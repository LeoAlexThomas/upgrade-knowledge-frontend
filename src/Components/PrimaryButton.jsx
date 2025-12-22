import React from "react";

const PrimaryButton = ({
  buttonLabel,
  onClick,
  type,
  fullWidth,
  isLoading,
  isDisabled,
}) => {
  return (
    <button
      className={`${
        isDisabled
          ? "bg-primary-hover opacity-50"
          : "bg-primary hover:bg-primary-hover"
      } text-white text-base font-medium rounded-xl w-full py-3.5 max-w-full ${
        fullWidth ? "" : "sm:max-w-fit"
      } py-2 px-4 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonLabel}{" "}
      {isLoading && (
        <i className="fa-solid fa-spinner fa-spin-pulse text-white fa-lg"></i>
      )}
    </button>
  );
};

export default PrimaryButton;
