import React from "react";
import Foto from "../assets/fotocarnet.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="max-w-[1000px] w-full grid grid-cols-2">
          <div class="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2ecc71]">
              Sobre mi
            </p>
          </div>
          <div></div>
        </div>
        <div class="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-[#8892b0]">
            <p>¡Hola! Me llamo Santiago</p>
          </div>
          <div>
            <p>
              Tengo 20 años y soy desarrollador Frontend junior. Actualmente
              resido en la provincia de Buenos Aires, Argentina. Comencé mi
              secundario en el 2014 y finalicé en 2019 así obteniendo mi
              bachillerato en Economía y Administración. Al finalizarlo, decidí
              dedicarme a programar desde el 2020 cuando comencé mi carrera de
              Técnico en Programación de Computadoras en la Universidad de Lomas
              de Zamora. Me considero una persona autodidacta, responsable y
              colaboradora. En mis momentos libres suelo jugar videojuegos y
              ver anime. Uno de mis deportes favoritos es el fútbol.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
