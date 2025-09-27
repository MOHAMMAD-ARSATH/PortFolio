import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import aboutData from "../data/about.json";

const Hero = () => {
  const [desgIndex, setDesgIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const currentDesg = aboutData.desg[desgIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      setTypedText(currentDesg.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentDesg.length) {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [desgIndex]);

  useEffect(() => {
    const cycle = setInterval(() => {
      setDesgIndex((prev) => (prev + 1) % aboutData.desg.length);
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20 md:pt-60">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 gap-10">
        <motion.div
          className="flex flex-col justify-center h-full text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            Hi, I'm <span className="text-cyan-400">{aboutData.name}</span>
          </h2>

          <h3 className="text-2xl sm:text-3xl mt-2 font-semibold text-white-400 min-h-[36px] md:min-h-[48px]">
            {typedText}
            <span className="border-r-2 border-cyan-400 animate-pulse ml-1" />
          </h3>

          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0">
            {aboutData.bio}
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Let’s Talk
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative mt-10 md:mt-0">
            <motion.img
              src="/assets/profile.png"
              alt="Profile"
              className="rounded-full object-cover w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-4 border-cyan-500 shadow-lg shadow-cyan-500/40"
              initial={{ y: -20 }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;