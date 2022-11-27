import React from "react";

const Card = ({ image, make }) => {
  return (
    <div className="m-2 rounded-xl shadow-2xl ">
      <p className="text-[black]">{make}</p>
      <img
        className="w-full rounded-t-xl h-[200px] object-cover "
        src={image}
        alt="/"
      />
    </div>
  );
};

export default Card;
