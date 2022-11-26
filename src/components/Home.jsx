import { type } from "@testing-library/user-event/dist/type";
import Typewriter from "typewriter-effect";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Foto from "../assets/fotocarnet.jpg";
import { motion } from "framer-motion";
import Kurama from "../assets/kurama1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [state] = useState({
    title: "Desarollador Frontend",
  });
  const imagenAnimada = {
    hidden: {
      y: "100vh",
    },
    show: {
      y: "0",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/* Container */}
      <div className="sm:flex-row max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full py-12">
        <div className="px-8 flex flex-col justify-center h-full">
          <p className="text-gray-300">Hola, mi nombre es</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[orange]">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                typeSpeed: 90,
                backSpeed: 60,
                strings: ["Santiago Almirón"],
              }}
            />
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[white]">
            {state.title}
          </h2>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="text-[white] group border-2 border-[white] px-6 py-3 my-2 flex items-center hover:text-[black] hover:bg-[orange] hover:border-[orange]">
                Sobre mi
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="hidden sm:flex items-center justify-center"
        >
          <img
            className="rounded-md border-4 border-[orange]"
            src={Foto}
            alt="foto"
            style={{ width: "400px" }}
          />
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF9D00"
              d="M34.7,-62.5C45.4,-54,54.7,-45.5,55.4,-35C56.1,-24.6,48.2,-12.3,48,-0.1C47.7,12,55.1,24,56.4,38.1C57.8,52.1,53.3,68.2,42.9,76.8C32.5,85.3,16.2,86.2,0.3,85.7C-15.6,85.2,-31.2,83.2,-44.2,76.1C-57.3,69.1,-67.7,57.1,-75.6,43.6C-83.6,30.1,-89.1,15,-84.7,2.6C-80.2,-9.9,-65.8,-19.8,-56.4,-30.8C-47,-41.8,-42.6,-54,-34,-63.7C-25.5,-73.3,-12.7,-80.4,-0.3,-79.8C12,-79.2,24.1,-70.9,34.7,-62.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <img
            className="rounded-md border-4 border-[orange]"
            src={Foto}
            alt="foto"
            style={{ width: "250px" }}
          />
        </div>
        <div className="hidden km:flex fixed bottom-[0%] right-0 z-10">
          <motion.div>
            <motion.p variants={imagenAnimada} initial="hidden" animate="show">
              <img
                className=""
                style={{ width: "350px" }}
                src={Kurama}
                alt="kurama"
              />
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
