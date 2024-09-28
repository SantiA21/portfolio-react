import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import CV from "../assets/CV.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[black] text-gray-300 z-10 border-b-4 border-[white]">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            className="cursor-pointer"
            src={Logo}
            alt="Logo"
            style={{ width: "120px" }}
          />
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <Link to="home" smooth={true} duration={500}>
          <li className="hover:text-[white] hover:bg-[orange] hover:rounded-sm">
            Inicio
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className="hover:text-[white] hover:bg-[orange] hover:rounded-sm">
            Sobre mi
          </li>
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          <li className="hover:text-[white] hover:bg-[orange] hover:rounded-sm">
            Experiencia
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="hover:text-[white] hover:bg-[orange] hover:rounded-sm">
            Conocimientos
          </li>
        </Link>
        <Link to="works" smooth={true} duration={500}>
          <li className="hover:text-[white] hover:bg-[orange] hover:rounded-sm">
            Proyectos
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="hover:text-[white] hover:bg-[orange] hover:rounded-sm">
            Contacto
          </li>
        </Link>
      </ul>

      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experiencia
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Conocimientos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="works" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
        <a href={CV} target="__blank" className="text-4xl py-6">
          Mi CV
        </a>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="__blank"
              href="https://www.linkedin.com/in/almiron-santiago-nahuel/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="__blank"
              href="https://github.com/SantiA21"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="__blank"
              href="mailto:nahuelcavs21@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="__blank"
              href={CV}
            >
              Mi CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
