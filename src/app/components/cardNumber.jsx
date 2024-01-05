import React from "react";

function NumberedCard({ number, title, description }) {
  return (
    <div className="max-w-sm  rounded   shadow-md m-5 p-4 bg-white relative">
      <div className="flex items-center justify-center w-16 h-16  rounded-full absolute -top-5 left-1/2 transform -translate-x-1/2  bg-white shadow-md  text-black font-bold text-3xl">
        {number}
      </div>
      <div className="inline-block">
        <div className="font-bold text-x text-blue-500 pt-10">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default NumberedCard;
