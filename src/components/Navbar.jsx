import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaCamera,
  FaYoutube,
  FaInstagram,
  //  FaFacebook,
  //  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

// import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"
    >
      <div></div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="skills">Skills</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/work">Work</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex fixed flex-col top-[35%] left-0"
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/juan-agustin-savoy-9b1103202"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Agustinsavoy1"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://audiovisual-portfolio.herokuapp.com/"
              rel="noreferrer"
            >
              Audiovisual <FaCamera size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/channel/UC86dkdMChJP8VX1tcu6eiCA"
              rel="noreferrer"
            >
              Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/agustinsavoy.json/"
              rel="noreferrer"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
