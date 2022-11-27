import React from "react";

const Card = ({ image }) => {
  return (
    <div className="m-2 rounded-xl shadow-2xl ">
      <img
        className="w-full rounded-t-xl h-[200px] object-cover "
        src={image}
        alt="/"
      />
    </div>
  );
};

export default Card;
