import React from "react";
import Nator from "../assets/nator.png";
import Tareas from "../assets/tareas.png";
import Peliculas from "../assets/peliculas.png";
import Pokedex from "../assets/pokedex.png";
import Weather from "../assets/apiweather.png";
import ReactImg from "../assets/react.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Php from "../assets/php.png";
import Tailwind from "../assets/tailwind.png";
import MySQL from "../assets/SQL.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="works"
      className="w-full md:h-screen text-[white] bg-[black] pt-20 sm:pt-0"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 text-[white] border-[orange]">
            Proyectos
          </p>
          <p className="py-6 text-gray-300">Trabajos realizados</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="flex flex-row">
                <img className="w-[60px]" src={ReactImg} alt="" />
                <img className="w-[60px]" src={HTML} alt="" />
                <img className="w-[60px]" src={CSS} alt="" />
              </div>
              <div className="pt-8 text-center">
                <a href="https://appiopenweather.netlify.app" target="__blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SantiA21/openweatherapi"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-row">
                <img className="w-[60px]" src={ReactImg} alt="" />
                <img className="w-[60px]" src={HTML} alt="" />
                <img className="w-[60px]" src={Tailwind} alt="" />
              </div>
              <div className="pt-8 text-center">
                <a href="https://pokedex-reactapi.netlify.app" target="__blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SantiA21/pokedex" target="__blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Peliculas})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <div className="flex flex-row">
                <img className="w-[60px]" src={ReactImg} alt="" />
                <img className="w-[60px]" src={HTML} alt="" />
                <img className="w-[60px]" src={CSS} alt="" />
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://pelisprueba-react.netlify.app"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SantiA21/movies-react"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Nator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="grid grid-cols-4 m-3 ">
                <img className="w-[60px]" src={JavaScript} alt="" />
                <img className="w-[60px]" src={HTML} alt="" />
                <img className="w-[60px]" src={CSS} alt="" />
                <img className="w-[80px]" src={Php} alt="" />
                <img className="w-[80px]" src={MySQL} alt="" />
              </div>
              <div className="pt-8 text-center">
                <a href="https://github.com/SantiA21/NATOR" target="__blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Tareas})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-row">
                <img className="w-[80px]" src={Php} alt="" />
                <img className="w-[60px]" src={HTML} alt="" />
                <img className="w-[60px]" src={CSS} alt="" />
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/SantiA21/Task-Manager"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
