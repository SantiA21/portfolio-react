import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Foto from "../assets/fotocarnet.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="sm:flex-row max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full py-12">
        <div className="px-8 flex flex-col justify-center h-full">
          <p className="text-gray-200">Hola, mi nombre es</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#2ecc71]">
            Santiago Almirón
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            Desarrollador frontend
          </h2>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2ecc71] hover:border-[#2ecc71]">
                Sobre mi
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center">
          <img
            className="rounded-md border-4 border-[#2ecc71]"
            src={Foto}
            alt="foto"
            style={{ width: "400px" }}
          />
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <img
            className="rounded-md border-4 border-[#2ecc71]"
            src={Foto}
            alt="foto"
            style={{ width: "250px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
