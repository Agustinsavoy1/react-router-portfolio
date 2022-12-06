import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold inline border-b-4 border-pink-600"
            >
              About
            </motion.p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              Hi. I'm Agus, nice to meet you. Please take a look around.
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              I am passionate about building excellent web applications that
              improves the lives of those around me and myself. I specialize in
              creating web apps for clients ranging from individuals and
              small-businesses all the way to large enterprise corporations.
              What would you do if you had a software expert available at your
              fingertips?
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
