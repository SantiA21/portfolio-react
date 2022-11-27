import React from "react";
import Nator from "../assets/nator.png";
import Tareas from "../assets/tareas.png";
import Peliculas from "../assets/peliculas.png";
import Pokedex from "../assets/pokedex.png";
import Weather from "../assets/apiweather.png";
import Cars from "../assets/autos.png";
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
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="works"
      className="md:max-w-[1080px] w-full m-auto  h-full bg-[black]  text-[white] md:h-screen"
    >
      <div className=" mx-auto p-4 flex flex-col justify-center  h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 text-[white] border-[orange]">
            Proyectos
          </p>
          <p className="py-6 text-gray-300">Trabajos realizados</p>
        </div>
        {/* Container */}
        <div data-aos="fade-up" className="">
          {/* Grid Item */}
          <div className="px-0 py-20 md:max-w-[1040px] max-w-[500px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={5}
              navigation
              breakpoints={{
                // when window width is >= 340px
                340: {
                  width: 200,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 4,
                },
                // when window width is >= 1040px
                1040: {
                  width: 1040,
                  slidesPerView: 5,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="bg-[white] rounded-xl">
                <Card image={Cars} />
                <div className="flex flex-row justify-evenly w-auto">
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a href="https://autosreactjs.netlify.app" target="__blank">
                      Demo
                    </a>
                  </button>
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://github.com/SantiA21/AutosReactJS"
                      target="__blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[white] rounded-xl">
                <Card image={Weather} />
                <div className="flex flex-row justify-evenly">
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://appiopenweather.netlify.app"
                      target="__blank"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://github.com/SantiA21/openweatherapi"
                      target="__blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[white] rounded-xl">
                <Card image={Pokedex} />
                <div className="flex flex-row justify-evenly">
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://pokedex-reactapi.netlify.app"
                      target="__blank"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://github.com/SantiA21/pokedex"
                      target="__blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[white] rounded-xl">
                <Card image={Peliculas} />
                <div className="flex flex-row justify-evenly ">
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://pelisprueba-react.netlify.app"
                      target="__blank"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://github.com/SantiA21/movies-react"
                      target="__blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[white] rounded-xl">
                <Card image={Nator} />
                <div className="flex flex-row justify-evenly ">
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://github.com/SantiA21/NATOR"
                      target="__blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[white] rounded-xl">
                <Card image={Tareas} />
                <div className="flex flex-row justify-evenly ">
                  <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                    <a
                      href="https://github.com/SantiA21/Task-Manager"
                      target="__blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
