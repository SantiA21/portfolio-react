import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[black] flex justify-center items-center p-4 flex-col"
    >
      <div
        data-aos="zoom-in"
        className="w-screen h-screen bg-[black] flex justify-center items-center p-4 flex-col mt-20 md:mt-0 md:w-full"
      >
        <form
          name="contact"
          method="POST"
          action="https://getform.io/f/f8f49428-30b3-4e2a-aa02-15a4381ff328"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8 md:pt-0">
            <p className="text-4xl font-bold inline border-b-4 border-[orange] text-[white] ">
              Contacto
            </p>
            <p className="text-gray-300 py-4">
              Actualmente me encuentro en busca de un empleo como desarrollador,
              dado que aún no tengo experiencia. Mi bandeja de entrada esta
              siempre disponible, ya sea para una consulta u oferta laboral,
              Intentare contestar a la brevedad.
            </p>
          </div>

          <input
            className="bg-[#ccd6f6] p-2 rounded-md"
            type="text"
            placeholder="Nombre"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] rounded-md"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded-md"
            name="message"
            cols="30"
            rows="10"
            placeholder="Mensaje"
          />

          <button className="text-white border-2 hover:text-[black] hover:bg-[orange] hover:border-[orange] px-4 py-3 my-8 mx-auto flex items-center">
            Enviar
          </button>
        </form>
        <div className="sm:hidden flex-row w-screen bg-[black] h-full">
          <ul className="md:hidden flex items-center justify-center w-full">
            <li className="w-[60px] h-[60px] flex items-center bg-blue-600">
              <a
                className="flex items-center w-full text-gray-300"
                target="__blank"
                href="https://www.linkedin.com/in/almiron-santiago-nahuel/"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[60px] h-[60px] flex items-center bg-[#333333] mx-3">
              <a
                className="flex items-center w-full text-gray-300"
                target="__blank"
                href="https://github.com/SantiA21"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[60px] h-[60px] flex items-center bg-[#6fc2b0]">
              <a
                className="flex items-center w-full text-gray-300"
                target="__blank"
                href="mailto:nahuelcavs21@gmail.com"
              >
                <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
