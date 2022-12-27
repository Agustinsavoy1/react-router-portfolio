import React, { useEffect, useState } from "react";
import RepoImg from "../assets/giphy.webp";
import { motion } from "framer-motion";

const Work = () => {
  const [repoList, setRepoList] = useState([]);

  const fetchRepos = async () => {
    await fetch("https://api.github.com/users/agustinsavoy1/repos")
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data, "repos");
          setRepoList(data);
        },
        (error) => {
          console.log(error, "fetcheala");
        }
      );
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  //https://hackernoon.com/how-to-fetch-large-data-files-through-github-api

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600"
          >
            Work
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="py-6"
          >
            Check out some of my recent work
          </motion.p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid Item */}
          {repoList.slice(0, 6).map((repo) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                key={repo.id}
                style={{
                  backgroundImage: `url(${RepoImg})`,
                }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider text-justify">
                    {repo.name}
                  </span>
                  <div className="pt-8 text-center">
                    {/* <a
                      target="_blank"
                      href={`https://${repo.name}.herokuapp.com`}
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a> */}
                    <a target="_blank" rel="noreferrer" href={repo.html_url}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
