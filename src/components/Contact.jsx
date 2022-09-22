import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 flex-col"
    >
      <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 flex-col">
        <form
          name="contact"
          method="POST"
          action="https://getform.io/f/f8f49428-30b3-4e2a-aa02-15a4381ff328"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#2ecc71] text-gray-300">
              Contacto
            </p>
            <p className="text-gray-300 py-4">
              Actualmente me encuentro en busca de un empleo como desarrollador,
              dado que aun no tengo experiencia. Mi bandeja de entrada esta
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

          <button className="text-white border-2 hover:bg-[#2ecc71] hover:border-[#2ecc71] px-4 py-3 my-8 mx-auto flex items-center">
            Enviar
          </button>
        </form>
        <div className="sm:hidden flex-row w-full">
          <ul className="md:hidden flex items-center justify-center">
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
      <p className="text-gray-300">© 2022 Santh - All Rights Reserved.</p>
    </div>
  );
};

export default Contact;
