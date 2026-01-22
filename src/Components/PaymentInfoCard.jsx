import React from "react";
import { getFormattedDateTime } from "../Utils/common";
import { MdDateRange } from "react-icons/md";

const PaymentInfoCard = ({ payment }) => {
  return (
    <section
      className={`shrink-0 w-full max-w-xs rounded-lg shadow-md p-4 overflow-hidden ${
        payment.status === "success"
          ? "bg-secondary-hover"
          : payment.status === "pending"
            ? "bg-primary-hover"
            : "bg-red-800"
      } text-white`}
    >
      <h5 className="font-Title text-xl font-bold mb-2 whitespace-break-spaces">
        {payment.lessonTitle}
      </h5>
      <p className="font-bold mb-1">₹{payment.price}</p>
      <p
        className={`
            ${
              payment.status === "success"
                ? "bg-secondary"
                : payment.status === "pending"
                  ? "bg-primary"
                  : "bg-red-400"
            }
            rounded-lg py-2 px-4 text-white font-bold mb-2 w-fit text-center`}
      >
        {payment.status}
      </p>
      <div className="flex gap-1 items-center mt-2">
        <MdDateRange className="w-5 h-5 text-white" />
        <p className="text-sm font-medium text-gray-200">
          {getFormattedDateTime({ date: payment.date, isDateOnly: true })}
        </p>
      </div>
    </section>
  );
};

export default PaymentInfoCard;
