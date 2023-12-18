import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className=" w-full h-full bg-[black]  text-[white] md:h-screen py-20"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-[orange]">
            Experiencia
          </p>
          <p className="py-4 text-gray-300">
            Puestos laborales en los que trabaje o trabajo actualmente
          </p>
        </div>
        <div className="">
          <p className="text-5xl">CINET S.A.</p>
          <p className="">Mesa de ayuda/Help Desk</p>
          <p>2023 - Actualidad</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
