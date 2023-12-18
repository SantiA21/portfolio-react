import React from "react";
import Foto from "../assets/fotocarnet.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="about" className="w-full h-screen bg-[black] text-[white]">
      <div
        className="animation"
        data-aos="fade-up"
        class="flex flex-col justify-center items-center w-full h-full"
      >
        <div class="max-w-[1000px] w-full grid grid-cols-2">
          <div class="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[orange]">
              Sobre mi
            </p>
          </div>
          <div></div>
        </div>
        <div class="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            data-aos="fade-right"
            className="sm:text-right text-4xl font-bold text-[orange]"
          >
            <p>¡Hola! Me llamo Santiago</p>
          </div>
          <div>
            <p>
              Tengo 21 años y soy desarrollador Frontend junior. Actualmente
              resido en la provincia de Buenos Aires, Argentina. Comencé mi
              secundario en el 2014 y finalicé en 2019 así obteniendo mi
              bachillerato en Economía y Administración. Al finalizarlo, decidí
              dedicarme a programar desde el 2020 cuando comencé mi carrera de
              Técnico en Programación de Computadoras en la Universidad de Lomas
              de Zamora, así finalizándola en 2022. Me considero una persona
              autodidacta, responsable y colaboradora. En mis momentos libres
              suelo jugar videojuegos y ver anime. Uno de mis deportes favoritos
              es el fútbol.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
