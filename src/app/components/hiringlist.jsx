import React from "react";

function Hiringlist({ title, description, image }) {
  return (
    <div
      className="max-w  flex overflow-hidden m-5 "
      style={{
        width: "620px",
        borderRadius: "25px",
      }}
    >
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4 flex text-left ">
        <div className="font-bold text-xs text-left m-4  text-blue-700">
          {title}
        </div>
        <p className="text-gray-700 text-xs  text-left">{description}</p>
      </div>
    </div>
  );
}

export default Hiringlist;
