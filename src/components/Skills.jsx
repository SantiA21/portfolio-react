import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Java from "../assets/java.png";
import NET from "../assets/NET.png";
import Python from "../assets/python.png";
import Php from "../assets/php.png";
import MySQL from "../assets/SQL.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="skills"
      className=" w-full h-full bg-[black]  text-[white] md:h-screen"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[orange]">
            Conocimientos
          </p>
          <p className="py-4 text-gray-300">Tecnologias con las que trabaje</p>
        </div>

        <div
          data-aos="fade-up"
          className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8"
        >
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="ReactIMG icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-[14%]" src={NET} alt="NET icon" />
            <p className="my-4">.NET</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-[14%]"
              src={Python}
              alt="Python icon"
            />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img className="w-20 mt-[33%] mx-auto" src={Php} alt="Php icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[orange] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-[25%]"
              src={MySQL}
              alt="MySQL icon"
            />
            <p className="my-4">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
