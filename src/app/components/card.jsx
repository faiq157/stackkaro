import React from "react";

function Card({ title, description, image }) {
  return (
    <div
      className="max-w-sm rounded overflow-hidden bg-white  m-5 shadow-sm"
      style={{
        width: "620px",
        borderRadius: "25px",
      }}
    >
      <img src={image} alt={title} width={20} height={20} />
      <div className="px-6 py-4">
        <div className="font-bold text-x mb-2 text-blue-700">{title}</div>
        <p className="text-gray-700 text-xs">{description}</p>
      </div>
    </div>
  );
}

export default Card;
