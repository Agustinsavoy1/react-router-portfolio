import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-pink-600"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
        >
          Juan Agustin Savoy
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-4xl font-bold text-[#8892b0]"
        >
          FullStack Developer.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[#8892b0] py-4 max-w-[700px]"
        >
          I’m a FullStack Developer, Computer Software Engineering specializing
          in building (and occasionally designing) exceptional digital
          experiences. Currently, I’m focused on building responsive web
          applications.
        </motion.p>
        <div>
          <a href="/work">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
